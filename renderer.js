const {ipcRenderer} = require('electron')

document.getElementById('dance').onclick = () => {
  ipcRenderer.send('dance')
}
