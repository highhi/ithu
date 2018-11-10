'use strict'

const { createServer } = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('*', (req, res) => {
  res.status(200).send('hello world')
})

const server = createServer(app)
server.listen(port);

server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`

  console.log(`Listening on ${bind}`)
});

server.on('error', (err) => {
  if (err.syscall !== 'listen') throw err

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`

  switch (err.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
    default:
      throw err;
  }
})

