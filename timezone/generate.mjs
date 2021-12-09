import path from 'path'
import fs from 'fs'
import mkdirp from 'mkdirp'
const { manualSync } = mkdirp

const __dirname = path.parse(new URL(import.meta.url).pathname).dir

const timezone = JSON.parse(fs.readFileSync(`${__dirname}/timezone.json`), 'utf-8')

const template = (region, zone, offset) => {
  return `import { TIMEZONE } from '${'../'.repeat(!region ? 1 : region.split('/').length + 1)}timezone'

TIMEZONE['${region ? `${region}/` : ''}${zone}'] = ${offset}
`
}

Object.entries(timezone).forEach(([key, value]) => {
  const components = key.split('/')
  const region = components.slice(0, -1).join('/')
  const zone = components.slice(-1).join('')
  const dir = `${__dirname}/../src/timezones${region ? `/${region}` : ''}`
  const file = `${dir}/${zone}.ts`
  manualSync(dir)
  fs.writeFileSync(file, template(region, zone, value))
})
