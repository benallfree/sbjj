/// <reference types="node" />
import favicons from 'favicons'
import fsx from 'fs-extra'
import { join } from 'path'
import { meta } from './src/meta'

const { ensureDirSync, writeFileSync } = fsx

const source = './src/assets/favicon.png' // Source image file
const outputDir = 'static/favicons' // Output directory

const configuration = {
  path: '/favicons/', // Path for overriding default icons path. `string`
  appName: meta.name, // Your application's name. `string`
  appShortName: meta.name, // Your application's short name. `string`
  appDescription: meta.description, // Your application's description. `string`
  developerName: `noaxis`, // Your (or your developer's) name. `string`
  developerURL: meta.support.discord.url, // Your (or your developer's) URL. `string`
  dir: 'auto', // Primary text direction for name, short_name, and description
  lang: 'en-US', // Primary language for name and short_name
  background: '#ffffff', // Background color for flattened icons. `string`
  theme_color: '#ffffff', // Theme color for browser chrome. `string`
  appleStatusBarStyle: 'black-translucent', // Style for Apple status bar. `string`
  display: 'standalone', // Preferred display mode: "fullscreen", "standalone", "minimal-ui" or "browser". `string`
  orientation: 'any', // Default orientation: "any", "natural", "portrait" or "landscape". `string`
  scope: '/', // set of URLs that the browser considers within your app
  start_url: '/?homescreen=1', // Start URL when launching the application from a device. `string`
  version: '1.0', // Your application's version string. `string`
  logging: false, // Print logs to console? `boolean`
  pixel_art: false, // Keeps pixels "sharp" when scaling up, for pixel art.  Only supported in offline mode. `boolean`
  loadManifestWithCredentials: false, // Browsers only: should the manifest be loaded with credentials? `boolean`
  icons: {
    // Platform Options:
    // - offset - offset in percentage
    // - background:
    //   * false - use default
    //   * true - force use default, e.g. set background for Android icons
    //   * color - set background for the specified icons
    //
    android: true, // Create Android homescreen icon. `boolean` or `{ offset, background }` or an array of sources
    appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background }` or an array of sources
    appleStartup: true, // Create Apple startup images. `boolean` or `{ offset, background }` or an array of sources
    favicons: true, // Create regular favicons. `boolean` or `{ offset, background }` or an array of sources
    windows: true, // Create Windows 8 tile icons. `boolean` or `{ offset, background }` or an array of sources
    yandex: true, // Create Yandex browser icon. `boolean` or `{ offset, background }` or an array of sources
  },
}

favicons(source, configuration)
  .then((response) => {
    // Save files to output directory
    ensureDirSync(outputDir)

    response.images.forEach((image) => {
      writeFileSync(join(outputDir, image.name), image.contents)
    })

    response.files.forEach((file) => {
      writeFileSync(join(outputDir, file.name), file.contents)
    })

    writeFileSync(
      join(outputDir, 'manifest.json'),
      JSON.stringify(response.html, null, 2),
    )

    // Output HTML code to a file or use it directly in your HTML templates
    writeFileSync(join(outputDir, 'favicon.html'), response.html.join('\n'))
  })
  .catch((error) => {
    console.error(error.message)
  })
