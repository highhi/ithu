import fetch from 'isomorphic-unfetch'

export const apiClient = {
  post<T extends {}>(path: string = '', body: T) {
    return fetch(`/api${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`)
        return res
      })
      .then((res) => {
        return res.json()
      })
  },
}
