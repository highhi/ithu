'use strict'

require('dotenv').config()
const runServer = require('./server')

runServer()

process.on('unhandledRejection', (err, p) => {
  console.error('Error : ', err)
  console.error('Promise : ', p)
})

process.on('uncaughtException', (err) => {
  console.error(err)
  process.exit(1)
})
