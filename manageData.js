function getSavedData() {
  jsonString = localStorage.getItem("school-timetable")
  return JSON.parse(jsonString) ?? []
}

function saveData(data) {
  jsonString = JSON.stringify(data)
  localStorage.setItem("school-timetable", jsonString)

  flashSuccess("Órarend sikeresen mentve!")
}

function loadSavedButtons() {
  const data = getSavedData()

  const savedDiv = document.getElementById("saved")
  savedDiv.innerHTML = ""
  data.forEach((element, idx) => {
    savedDiv.innerHTML += `<button id="load-${idx}" class="btn btn-primary mx-1" onclick="loadSpecificTable(${idx})">${idx + 1}</button>`
  })
}

function getCurrentNumber() {
  const current = document.getElementById("loaded-number")
  number = parseInt(current.innerHTML)

  if (isNaN(number)) return null

  return number
}

function setCurrentNumber(number) {
  document.getElementById("loaded-number").innerHTML = number
}
