import fetch from 'isomorphic-unfetch'

export const apiClient = {
  get(path: string) {
    const error = new Error()
    return fetch(`/api${path}`).then((res) => {
      if (!res.ok) {
        error.message = `${res.status}: ${res.statusText}`
        throw error
      }
      return res.json()
    })
  },

  post(path: string = '', body: object) {
    const error = new Error()
    const csrfToken = (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement).content
    return fetch(`/api${path}`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'X-CSRF-Token': csrfToken,
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (!res.ok) {
        error.message = `${res.status}: ${res.statusText}`
        throw error
      }
      return res.json()
    })
  },
}
