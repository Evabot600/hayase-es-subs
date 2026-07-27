export default new class extends SubtitleSource {
  async test() {
    const res = await fetch("https://TU_FUENTE_DE_SUBS")
    if (!res.ok) throw new Error("La fuente de subtítulos no responde.")
    return true
  }

  async single(query) {
    const { anilistId, episode, titles, fetch } = query

    console.log("anilistId:", anilistId)
    console.log("episode:", episode)
    console.log("titles:", titles)

    // Por ahora devolvemos un ejemplo fijo.
    // Luego lo cambiamos por la búsqueda real.
    return [
      {
        url: "https://TU_FUENTE_DE_SUBS/subs/ejemplo.es.srt",
        language: "ES"
      }
    ]
  }
}