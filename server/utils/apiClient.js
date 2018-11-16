const fetch = require('isomorphic-unfetch')

module.exports = {
  get(path) {
    return fetch(path)
      .then(res => {
        if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`)
        return res.json()
      })
  }
}