function main() {
  generateTables()
}

window.addEventListener("DOMContentLoaded", () => {
  main()
})

function preventDefault(e) {
  e.preventDefault()
}

function drag(e) {
  e.dataTransfer.setData("text", e.target.id)
}

function drop(e) {
  e.preventDefault()
  var data = e.dataTransfer.getData("text")

  if (!e.target.children[0] && e.target.tagName == "TH") e.target.appendChild(document.getElementById(data))
}
