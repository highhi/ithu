import serialize from 'serialize-javascript'

type Prams = {
  body: string
  initialState: string
  style: string
  assets: string
}

export const renderFullPage = ({ body, initialState, style, assets }: Prams) => {
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
        <link href="//fonts.googleapis.com/css?family=Oleo+Script" rel="stylesheet" />
        <link href="//fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
        ${style}
      </head>
      <body>
        <div id="app">${body}</div>
        <script>window.__INITIAL_STATE__=${serialize(initialState)}</script>
        ${assets}
      </body>
    </html>
  `.trim()
}
