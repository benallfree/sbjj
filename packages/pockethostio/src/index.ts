#!/usr/bin/env tsx

import { Command } from 'commander'
import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import { Config, createWatcher } from './ftp'

const __dirname = dirname(new URL(import.meta.url).pathname)

const program = new Command(`pockethostio`).addCommand(
  new Command(`watch`)
    .argument(`project`, `Project name`)
    .action(async (project: string) => {
      const config: Config = JSON.parse(
        readFileSync(`../../.secrets/${project}.json`, 'utf-8'),
      )
      config.localPath = join(__dirname, '../..', config.localPath)
      console.log({ config })
      createWatcher(config)
    }),
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
