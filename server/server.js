'use strict'

module.exports = () => {
  const path = require('path')
  const { createServer } = require('http')
  const express = require('express')
  const bodyParser = require('body-parser')
  const helmet = require('helmet')
  const compression = require('compression')
  const session = require('express-session')
  const logger = require('morgan')
  const router = require('./router')

  const port = process.env.PORT || 3000
  const app = express()
  const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true,
      httpOnly: true,
      domain: process.env.HOST,
    }
  }

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug')
  app.use(logger('dev'))
  app.use(helmet())
  app.use(compression())
  app.use(express.static('dist'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  router(app)

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
}
