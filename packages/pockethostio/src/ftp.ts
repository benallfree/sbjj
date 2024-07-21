import * as ftp from 'basic-ftp'
import Bottleneck from 'bottleneck'
import * as chokidar from 'chokidar'
import { join } from 'path'

export interface Config {
  instanceId: string
  localPath: string
  remotePath: string
  username: string
  password: string
  host: string
  port: number
}

const limiter = new Bottleneck({ maxConcurrent: 1 })
export const createWatcher = async (config: Config) => {
  async function uploadFile(
    client: ftp.Client,
    localPath: string,
    remotePath: string,
  ) {
    try {
      await client.uploadFrom(localPath, remotePath)
      console.log(`Uploaded ${localPath} to ${remotePath}`)
    } catch (err) {
      console.error(`Error uploading ${localPath}:`, err)
    }
  }

  const client = new ftp.Client(0)
  client.ftp.verbose = true
  await client.access({
    host: config.host,
    port: config.port,
    user: config.username,
    password: config.password,
    secure: true,
  })
  ;[`pb_hooks`, `pb_migrations`, `pb_public`].forEach((dir) => {
    chokidar
      .watch(dir, { ignored: /(^|[\/\\])\../ })
      .on('all', (event, path) => {
        const relativePath = path.replace(config.localPath, '')
        const remotePath = join(config.remotePath, relativePath)

        console.log({ relativePath, remotePath, event })
        if (event === 'add' || event === 'change') {
          limiter.schedule(() => uploadFile(client, path, remotePath))
        }
      })
  })
}
