import * as ftp from 'basic-ftp'
import * as chokidar from 'chokidar'

export interface Config {
  instanceId: string
  localPath: string
  remotePath: string
  username: string
  password: string
  host: string
  port: number
}

export const createWatcher = (config: Config) => {
  async function uploadFile(
    client: ftp.Client,
    localPath: string,
    remotePath: string,
  ) {
    try {
      await client.access({
        host: config.host,
        port: config.port,
        user: config.username,
        password: config.password,
        secure: true,
      })

      await client.uploadFrom(localPath, remotePath)
      console.log(`Uploaded ${localPath} to ${remotePath}`)
    } catch (err) {
      console.error(`Error uploading ${localPath}:`, err)
    }
  }

  const client = new ftp.Client()
  client.ftp.verbose = true

  chokidar
    .watch(config.localPath, { ignored: /(^|[\/\\])\../ })
    .on('all', (event, path) => {
      const relativePath = path.replace(config.localPath, '')
      const remotePath = `${config.remotePath}${relativePath}`

      if (event === 'add' || event === 'change') {
        uploadFile(client, path, remotePath)
      }
    })
}
