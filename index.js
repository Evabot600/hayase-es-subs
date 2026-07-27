export default new class extends SubtitleSource {

  async test() {
    return true;
  }

  async single({ anilistId, episode, titles, fetch }) {
    console.log("SUBTITLE QUERY", {
      anilistId,
      episode,
      titles
    });

    return [];
  }

}();
