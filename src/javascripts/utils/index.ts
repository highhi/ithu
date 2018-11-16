import fetch from 'isomorphic-unfetch'

export const apiClient = {
  get(path: string) {
    return fetch(`/api${path}`).then((res) => {
      if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`)
      return res.json()
    })
  },

  post<T extends {}>(path: string = '', body: T) {
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
      if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`)
      return res.json()
    })
  },
}
