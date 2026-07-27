export default new class HayaseESSubs {

  async single({ titles, episode }) {
    console.log("Buscando subtítulos:", titles, episode)

    return []
  }

  batch = this.single
  movie = this.single

  async test() {
    return true
  }

}()
