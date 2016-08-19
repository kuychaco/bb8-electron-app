const path = require('path')

const {app, BrowserWindow, Tray} = require('electron')

app.on('ready', () => {
  createWindow()
  createTray()
})

let tray
const createTray = () => {
  tray = new Tray(path.join(__dirname, 'images', 'icon.png'))
}

let mainWindow
function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL(`file://${path.join(__dirname, 'index.html')}`)
}

app.dock.hide()
