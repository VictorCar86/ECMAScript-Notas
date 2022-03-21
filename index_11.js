// ES11 //
// Dynamic Import - permite llamar código desde otro archivo //
const button = document.getElementById("btn")
button.addEventListener("click", async () => {
  const module = await import("./file.js")
  module.hello()
})