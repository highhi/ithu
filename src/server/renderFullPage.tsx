import serialize from 'serialize-javascript'
const assets = require('./manifest.json')

type Prams = {
  body: string
  initialState: string
  style: string
}

export const renderFullPage = ({ body, initialState, style }: Prams) => {
  return `<!DOCTYPE html>
    <html land="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="viewport" content="width=device-width initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>iThu</title>
        <link rel="preconnect" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="//audio-ssl.itunes.apple.com" />
        <link rel="preconnect" href="//is1-ssl.mzstatic.com" />
        <link rel="preload" href="//fonts.googleapis.com/css?family=Oleo+Script" as="style" />
        <link rel="preload" href="//fonts.googleapis.com/css?family=Lato" as="style" />
        <link rel="preload" href="/stylesheets/style.css" as="style" />
        <link rel="preload" href="/${assets['javascripts/runtime.js']}" as="script" />
        <link rel="preload" href="/${assets['javascripts/react.js']}" as="script" />
        <link rel="preload" href="/${assets['javascripts/vendor.js']}" as="script" />
        <link rel="preload" href="/${assets['javascripts/main.js']}" as="script" />
        <link href="//fonts.googleapis.com/css?family=Oleo+Script" rel="stylesheet" />
        <link href="//fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
        <link rel="stylesheet" href="/stylesheets/style.css" />
        ${style}
      </head>
      <body>
        <div id="app">${body}</div>
        <script>window.__INITIAL_STATE__=${serialize(initialState)}</script>
        <script src="/${assets['javascripts/runtime.js']}" defer></script>
        <script src="/${assets['javascripts/react.js']}" defer></script>
        <script src="/${assets['javascripts/vendor.js']}" defer></script>
        <script src="/${assets['javascripts/main.js']}" defer></script>
      </body>
    </html>
  `.trim()
}
