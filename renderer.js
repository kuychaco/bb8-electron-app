const {ipcRenderer} = require('electron')

ipcRenderer.on('sound', (event, sound) => {
  window.audio = new Audio()
  window.audio.src = `./sounds/${sound}.mp3`
  window.audio.play()
})

document.getElementById('dance').onclick = () => {
  ipcRenderer.send('dance')
}

document.getElementById('disco').onclick = () => {
  ipcRenderer.send('disco')
}
