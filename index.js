// prettier-ignore
const classList = ["Magyar nyelv és irodalom",
  "Magyar nyelv és irodalom",
  "Angol",
  "Német",
  "Matematika",
  "Történelem, társadalmi és állampolgári ismeretek",
  "Etika",
  "Biológia-egészségtan",
  "Fizika",
  "Kémia",
  "Földrajz",
  "Ének-zene",
  "Dráma és tánc",
  "Vizuális kultúra",
  "Mozgóképkultúra és médiaismeret",
  "Művészetek",
  "Informatika",
  "Technika, életvitel és gyakorlat",
  "Testnevelés és sport"
]

function main() {
  generateTables(classList)

  loadSavedButtons()
}

function preventDefault(e) {
  e.preventDefault()
}

function drag(e) {
  e.dataTransfer.setData("text", e.target.id)
}

function drop(e) {
  e.preventDefault()
  var data = e.dataTransfer.getData("text")

  if (!e.target.children[0] && e.target.tagName == "TH") {
    e.target.appendChild(document.getElementById(data))

    return
  }

  flashAlert("Ez a mező már foglalt!")
}

window.addEventListener("DOMContentLoaded", () => {
  main()
})
