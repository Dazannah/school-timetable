const startHour = 8
const endHour = 16
const lessonTime = 45 //min

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
}
