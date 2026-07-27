export default new class extends SubtitleSource {

  async test() {
    return true
  }

  async single({ anilistId, episode, titles, fetch }) {
    return []
  }

}()
