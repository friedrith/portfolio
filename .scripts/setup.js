import path from 'path'
import { promises as fs } from 'fs'
import { name, description, author } from '../package'

/* eslint-disable no-console */

const filenames = [
  path.resolve(__dirname, '../CONTRIBUTING.md'),
  path.resolve(__dirname, '../gatsby-config.js'),
]

const replaceByRealName = filename =>
  fs
    .readFile(filename, 'utf8')
    .then(data => data.replace(/PROJECT_NAME/g, name))
    .then(data => data.replace(/PROJECT_DESCRITION/g, description))
    .then(data => data.replace(/PROJECT_AUTHOR/g, author))
    .then(data => fs.writeFile(filename, data))
    .then(data => filename)

Promise.all(filenames.map(replaceByRealName))
  .then(touchedFilenames => {
    console.log('success:', touchedFilenames.join(', '))
  })
  .catch(errors => {
    console.log(errors)
    process.exit(2)
  })

/* eslint-enable no-console */
