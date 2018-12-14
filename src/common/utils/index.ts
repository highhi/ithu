import fetch from 'isomorphic-unfetch'

export const apiClient = {
  async get(path: string) {
    const error = new Error()
    return fetch(`/api${path}`).then((res) => {
      if (!res.ok) {
        error.message = `${res.status}: ${res.statusText}`
        return Promise.reject(error)
      }
      return res.json()
    })
  },

  post(path: string = '', body: object) {
    const error = new Error()
    return fetch(`/api${path}`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (!res.ok) {
        error.message = `${res.status}: ${res.statusText}`
        return Promise.reject(error)
      }
      return res.json()
    })
  },
}
