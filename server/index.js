'use strict'

const { createServer } = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const routes = require('./routes')

const port = process.env.PORT || 3000
const app = express()

app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('dist'))
app.use(routes)

app.use((err, _req, _res, next) => {
  console.error(err.stack);
  next(err)
})

app.use((err, req, res, next) => {
  if (req.xhr) {
    return res.status(500).send({ error: 'Something failed!' });
  }
  next(err)
})

app.use((err, _req, res, _next) => {
  res.status(500).send({ error: err });
})


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

// process.on('unhandledRejection', console.dir);

