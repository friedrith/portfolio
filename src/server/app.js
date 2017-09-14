import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import winston from 'winston'

if (process.env.NODE_ENV !== 'production') {
  try {
    dotenv.config()
  } catch (error) {
    winston.error('impossible to read file .env', { error })
  }
}

const app = express()

const listener =
app
  .use('/', express.static(path.join(__dirname, '../../dist/front')))
  .use('/', express.static(path.join(__dirname, '../../src/front')))
  .get('/', (req, res) => {
    res.send('ok')
  })
  .listen(process.env.PORT, () => {
    winston.info(`server listening on port ${listener.address().port}`)
  })
