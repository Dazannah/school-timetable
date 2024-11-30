const startHour = 8
const endHour = 16
const lessonTime = 45 //min
const columnCount = 5

function newTables() {
  generateTables(classList)

  flashSuccess("Órarendek alaphelyzetbe állítva!")
}

function loadSpecificTable(idx) {
  const dataToLoad = getSavedData()[idx]

  generateTables(dataToLoad.classList, `${idx + 1}`, dataToLoad.timeTable)
  flashSuccess(`${idx + 1} órarend sikeresen betöltve!`)
}

function loadTimeTable(timeTable) {
  if (timeTable.length < 1) return

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < endHour - startHour; j++) {
      if (timeTable[j][i].text != "") document.getElementById(`table-th-${j}${i}`).innerHTML = `<th id="class-th-${timeTable[j][i].id}" style="width: 11%"><span id="${timeTable[j][i].id}" role="button" draggable="true" ondragstart="drag(event)">${timeTable[j][i].text}</span></th>`
    }
  }
}

function loadClassTable(classList) {
  const classTableTbody = document.getElementById("class-table-tbody")
  classTableTbody.innerHTML = ""

  let htmlToAdd = "<tr>"
  classList.forEach((element, idx) => {
    htmlToAdd += `<th id="class-th-${idx}" style="width: 11%">`

    if (element != "") {
      htmlToAdd += `<span id="${idx}" role="button" draggable="true" ondragstart="drag(event)">${element}</span>`
    }

    htmlToAdd += `</th>`

    isLastRow = idx + 1 == classList.length

    if (isLastRow || (idx + 1) % columnCount == 0) {
      if (isLastRow) {
        const remainder = columnCount - ((idx + 1) % columnCount)

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

function generateTables(classList, tableName = "Új órarend", timeTable = []) {
  setCurrentNumber(tableName)

  const tbody = document.getElementById("tbody")
  tbody.innerHTML = ""

  for (let i = 0; i + startHour < endHour; i++) {
    currTime = i + startHour
    tbody.innerHTML += `
            <tr>
              <th style="width: 11%">${currTime}:00 - ${currTime}:${lessonTime}</th>
              <th id="table-th-${i}0" ondrop="drop(event)" ondragover="preventDefault(event)"></th>
              <th id="table-th-${i}1" ondrop="drop(event)" ondragover="preventDefault(event)"></th>
              <th id="table-th-${i}2" ondrop="drop(event)" ondragover="preventDefault(event)"></th>
              <th id="table-th-${i}3" ondrop="drop(event)" ondragover="preventDefault(event)"></th>
              <th id="table-th-${i}4" ondrop="drop(event)" ondragover="preventDefault(event)"></th>
            </tr>
`
  }

  loadClassTable(classList)
  loadTimeTable(timeTable)
}
