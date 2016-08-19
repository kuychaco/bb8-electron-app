const {ipcRenderer} = require('electron')

document.getElementById('dance').onclick = () => {
  ipcRenderer.send('dance')
}

document.getElementById('disco').onclick = () => {
  ipcRenderer.send('disco')
}

document.getElementById('magic-8-ball').onclick = () => {
  ipcRenderer.send('magic-8-ball')
}
