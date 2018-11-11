exports.httClient = (params) => {
  const { term, media, entity, limit = 10 } = params
  return fetch(`https://itunes.apple.com/search?term=${term}&media=${media}&entity=${entity}&country=jp&lang=ja_jp&limit=${limit}`)
    .then(res => {
      if (!res.ok) { throw new Error('Network response was not ok.') }
      return res
    })
}