export default new class HayaseESSubs {

  async test() {
    return true
  }

  async single({ anilistId, titles, episode }) {
    console.log("Hayase ES Subs:", {
      anilistId,
      titles,
      episode
    })

    return []
  }

  batch = this.single
  movie = this.single

}()
