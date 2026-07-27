export default new class HayaseESSubs {

  async test() {
    console.log("TEST EJECUTADO");
    return true;
  }

  async single(args) {
    console.log("SINGLE", args);
    return [];
  }

  async movie(args) {
    console.log("MOVIE", args);
    return [];
  }

  async batch(args) {
    console.log("BATCH", args);
    return [];
  }

}();
