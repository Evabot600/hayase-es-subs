export default new class extends SubtitleSource {

  async test() {
    return true;
  }

  async single() {
    return [
      {
        url: "https://raw.githubusercontent.com/PolyglotGuy/subtitle-tools/master/examples/example.srt",
        language: "ES"
      }
    ];
  }

}();
