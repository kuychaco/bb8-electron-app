const {ipcRenderer} = require('electron')

document.getElementById('dance').onclick = () => {
  ipcRenderer.send('dance')
}

document.getElementById('disco').onclick = () => {
  ipcRenderer.send('disco')
}
