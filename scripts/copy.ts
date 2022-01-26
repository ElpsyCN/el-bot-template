import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const pluginsFolder = path.resolve(__dirname, '../src/plugins')
if (fs.existsSync(pluginsFolder)) {
  const plugins = fs.readdirSync(path.resolve(__dirname, '../src/plugins'))

  // eslint-disable-next-line array-callback-return
  plugins.map((item) => {
    const source = path.resolve(__dirname, '../src/plugins/', item, 'package.json')
    if (fs.existsSync(source)) {
      const dest = path.resolve(__dirname, '../dist/plugins', item, 'package.json')
      fs.copyFileSync(source, dest)
    }
  })
}
