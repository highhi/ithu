'use strict'

require('dotenv').config()
const path = require('path')
const { createServer } = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const compression = require('compression')
const session = require('express-session')
const csurf = require('csurf')
const logger = require('morgan')
const router = require('./router')

const port = process.env.PORT || 3000
const app = express()
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    //secure: true,
    httpOnly: true,
    domain: process.env.HOST,
  }
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')
app.use(logger('dev'))
app.use(helmet())
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session(sessionOptions))
app.use(csurf())
app.use(express.static('dist'))
router(app)

// if (process.env.NODE_ENV !== 'production') {
//   const webpack = require('webpack');
//   const webpackHotMiddleware = require('webpack-hot-middleware');
//   const webpackDevMiddleware = require('webpack-dev-middleware');
//   const config = require('./webpack.config');
//   const compiler = webpack(config);

//   app.use(webpackHotMiddleware(compiler));
//   app.use(
//     webpackDevMiddleware(compiler, {
//       publicPath: config.output.publicPath
//     })
//   );
// }

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
