export default new class HayaseESSubs {

  async test() {
    return true
  }

  async single({ titles, episode }) {
    console.log(titles, episode)

    return []
  }

}()
