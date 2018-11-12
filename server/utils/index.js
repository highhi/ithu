const fetch = require('isomorphic-unfetch')

exports.apiClient = {
  get(path) {
    return fetch(path)
      .then(res => {
        console.log(res.status)
        if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`)
        return res.json()
      })
  }
}