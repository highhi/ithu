import fetch from 'isomorphic-unfetch'

export default {
  get(path: string) {
    return fetch(path).then((res) => {
      if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`)
      return res.json()
    })
  },
}
