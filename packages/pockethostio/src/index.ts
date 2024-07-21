#!/usr/bin/env tsx

import { isEqual, map } from '@s-libs/micro-dash'
import Bottleneck from 'bottleneck'
import { Command } from 'commander'
import { flatten } from 'flat'
import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import PocketBase from 'pocketbase'
import simpleGit from 'simple-git'
import meta from '../../frontend/src/meta/meta.json'
import { Config } from './Config'
import { createWatcher } from './ftp'

async function getFirstPartOfCurrentBranch(): Promise<string> {
  const git = simpleGit()
  const status = await git.status()
  const branchName = status.current
  return branchName?.split('/')[0]!
}
const __dirname = dirname(new URL(import.meta.url).pathname)

const pbLimiter = new Bottleneck({ maxConcurrent: 100 })

const loadConfig = (project: string) => {
  const config: Config = JSON.parse(
    readFileSync(`../../.secrets/${project}.json`, 'utf-8'),
  )
  return config
}
const program = new Command(`pockethostio`)
  .addCommand(
    new Command(`watch`).action(async () => {
      const project = await getFirstPartOfCurrentBranch()
      const config = loadConfig(project)
      config.localPath = join(__dirname, '../..', config.localPath)
      console.log({ config })
      createWatcher(config)
    }),
  )
  .addCommand(
    new Command(`meta`)
      .addCommand(
        new Command(`push`)
          .option(`--reset`, `Reset all meta keys`)
          .action(async ({ reset }) => {
            const project = await getFirstPartOfCurrentBranch()
            const config = loadConfig(project)
            const pb = new PocketBase(`https://${project}.pockethost.io`)
            pb.beforeSend = async (url, options) => {
              return {
                url,
                options: {
                  ...options,
                  headers: {
                    ...options.headers,
                    [`x-pockethost-waf-rl-secret`]: config.rateLimitSecret,
                  },
                },
              }
            }
            await pb.admins.authWithPassword(config.username, config.password)
            console.log({ reset })
            if (reset) {
              console.log(`Resetting all meta keys`)
              const res = await pb.collection(`meta`).getFullList()
              await Promise.all(
                res.map(async (rec) => {
                  await pbLimiter.schedule(() => {
                    console.log(`Deleting ${rec.key}`)
                    return pb.collection(`meta`).delete(rec.id)
                  })
                }),
              )
            }
            const res = await pb.collection(`meta`).getFullList()
            const flattened = flatten(meta, { safe: true, maxDepth: 2 }) as {
              [key: string]: any
            }
            await Promise.all(
              map(flattened, async (value, key) => {
                try {
                  const existing = res.find((rec) => rec.key === key)
                  if (existing) {
                    if (
                      isEqual(existing.value, value) ||
                      existing.value === value
                    ) {
                      console.log(`${key} up to date`)
                      return
                    }
                    console.log(`Updating ${key}`, {
                      existing,
                      value,
                    })
                    await pbLimiter.schedule(() => {
                      console.log(`Inserting ${key}`)
                      return pb
                        .collection(`meta`)
                        .update(
                          existing.id,
                          { value },
                          { requestKey: existing.id },
                        )
                    })
                  } else {
                    await pbLimiter.schedule(() => {
                      console.log(`Inserting ${key}`)
                      return pb
                        .collection(`meta`)
                        .create({ key, value }, { requestKey: key })
                    })
                  }
                } catch (e) {
                  console.error(e)
                }
              }),
            )
          }),
      )
      .addCommand(new Command(`pull`).action(() => {})),
  )
// .addCommand(
//   new Command(`tail`)
//     .argument(`configPath`, `Path to the JSON config file`)
//     .action(async (configPath) => {
//       const config: Config = JSON.parse(readFileSync(configPath, 'utf-8'))

//       // const { authViaEmail, onAuthChange } = createPocketbaseClient({
//       //   url: `https://pockethost-central.pockethost.io`,
//       // })
//       // onAuthChange(async (auth) => {
//       //   console.log({ auth })
//       // })
//       // await authViaEmail(config.username, config.password)
//     }),
// )

// Define your commands and options here

program.parseAsync(process.argv)
