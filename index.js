export default new class extends SubtitleSource {

  async test() {
    return true;
  }

  async single() {
    throw new Error("¡¡SINGLE FUE EJECUTADO!!");
  }

}();
