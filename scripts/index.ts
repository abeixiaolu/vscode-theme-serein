import fs from 'fs-extra'
import { getXtermTheme } from './extra'
import getTheme from './theme'

console.log('starting')

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './themes/serein-light.json',
      getTheme({
        color: 'light',
        name: 'Serein Light',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/serein-dark.json',
      getTheme({
        color: 'dark',
        name: 'Serein Dark',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/serein-light-soft.json',
      getTheme({
        color: 'light',
        name: 'Serein Light Soft',
        soft: true,
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/serein-dark-soft.json',
      getTheme({
        color: 'dark',
        name: 'Serein Dark Soft',
        soft: true,
      }),
      { spaces: 2 },
    ),
  ]))

fs.mkdir('./extra', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './extra/xterm-serein-light.json',
      getXtermTheme({
        color: 'light',
        name: 'Serein Light',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './extra/xterm-serein-dark.json',
      getXtermTheme({
        color: 'dark',
        name: 'Serein Dark',
      }),
      { spaces: 2 },
    ),
  ]))

console.log('finished')
