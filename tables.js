const startHour = 8
const endHour = 16
const lessonTime = 45 //min

const classList = ["Matematika", "Matematika", "Matematika", "Magyar nyelvtan", "Magyar nyelvtan", "Magyar nyelvtan", "Magyar irodalom", "Magyar irodalom", "Magyar irodalom", "Ének", "Ének", "Ének", "Fizika", "Fizika"]

function generateTables() {
  const tbody = document.getElementById("tbody")

  for (let i = startHour; i < endHour; i++) {
    tbody.innerHTML += `
            <tr>
              <th style="width: 11%">${i}:00 - ${i}:${lessonTime}</th>
              <th id="${i}0" ondrop="drop(event)" ondragover="preventDefault(event)"></th>
              <th id="${i}1" ondrop="drop(event)" ondragover="preventDefault(event)"></th>
              <th id="${i}2" ondrop="drop(event)" ondragover="preventDefault(event)"></th>
              <th id="${i}3" ondrop="drop(event)" ondragover="preventDefault(event)"></th>
              <th id="${i}4" ondrop="drop(event)" ondragover="preventDefault(event)"></th>
            </tr>
`
  }

  const classTableTbody = document.getElementById("class-table-tbody")

  let htmlToAdd = "<tr>"
  classList.forEach((element, idx) => {
    htmlToAdd += `<th style="width: 11%"><span id="${idx}" role="button" draggable="true" ondragstart="drag(event)">${element}</span></th>`

    isLastRow = idx + 1 == classList.length

    if (isLastRow || (idx + 1) % 4 == 0) {
      if (isLastRow) {
        const remainder = 4 - ((idx + 1) % 4)

        for (let i = 0; i < remainder; i++) {
          htmlToAdd += `<th style="width: 11%"></th>`
        }
      }

      htmlToAdd += "</tr>"
      classTableTbody.innerHTML += htmlToAdd
      htmlToAdd = "<tr>"
    }
  })
}
