import { action, decorate, observable } from 'mobx'

export class AudioStore {
  trackId = 0
  previewUrl = ''

  setTrack = (previewUrl: string, trackId: number) => {
    if (this.trackId === trackId) {
      this.trackId = 0
      this.previewUrl = ''
      return
    }

    this.trackId = trackId
    this.previewUrl = previewUrl
  }
}

decorate(AudioStore, {
  trackId: observable.ref,
  previewUrl: observable.ref,
  setTrack: action,
})
