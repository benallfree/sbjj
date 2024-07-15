import { Command } from 'commander'
import { readFileSync } from 'fs'
import { Config, createWatcher } from './ftp'

const program = new Command(`pockethostio`)
  .addCommand(
    new Command(`watch`)
      .argument(`configPath`, `Path to the JSON config file`)
      .action(async (configPath) => {
        const config: Config = JSON.parse(readFileSync(configPath, 'utf-8'))
        createWatcher(config)
      }),
  )
  .addCommand(
    new Command(`tail`)
      .argument(`configPath`, `Path to the JSON config file`)
      .action(async (configPath) => {
        const config: Config = JSON.parse(readFileSync(configPath, 'utf-8'))

        // const { authViaEmail, onAuthChange } = createPocketbaseClient({
        //   url: `https://pockethost-central.pockethost.io`,
        // })
        // onAuthChange(async (auth) => {
        //   console.log({ auth })
        // })
        // await authViaEmail(config.username, config.password)
      }),
  )

// Define your commands and options here

program.parseAsync(process.argv)
