'use strict'

require('dotenv').config()
const runServer = require('./server')

runServer()

if (process.env.NODE_ENV === 'development') {
  process.on('unhandledRejection', (err, p) => {
    console.error('Error : ', err)
    console.error('Promise : ', p)
  })
}

process.on('unhandledRejection', (err, p) => {
  logger.error(err, p);
})

process.on('uncaughtException', (err) => {
  console.error(err)
  process.exit(1)
})
