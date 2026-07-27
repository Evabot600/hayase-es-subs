export default new class HayaseESSubs {
  async test() {
    return true
  }

  async single({ anilistId, episode, titles }) {
    console.log(anilistId, episode, titles)
    return []
  }
}()
