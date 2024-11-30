const timeoutIds = []

function flashAlert(message) {
  cancelAllFlashMessageTimeout()
  const falshDiv = document.getElementById("flash-message")

  falshDiv.innerHTML = ""

  falshDiv.innerHTML = `<div class="alert alert-danger" role="alert">
  ${message}
  </div>
`

  const id = setTimeout(() => {
    falshDiv.innerHTML = ""
  }, 5000)

  timeoutIds.push(id)
}

function flashSuccess(message) {
  cancelAllFlashMessageTimeout()
  const falshDiv = document.getElementById("flash-message")

  falshDiv.innerHTML = ""

  falshDiv.innerHTML = `<div class="alert alert-success" role="alert">
  ${message}
  </div>
`
  const id = setTimeout(() => {
    falshDiv.innerHTML = ""
  }, 5000)

  timeoutIds.push(id)
}

function cancelAllFlashMessageTimeout() {
  timeoutIds.forEach(id => {
    clearTimeout(id)
  })
}
