const path = require('path')

const {app, BrowserWindow, Tray, ipcMain} = require('electron')

const Positioner = require('electron-positioner')

app.on('ready', () => {
  createTray()

  ipcMain.on('dance', () => console.log('dance BB-8!'))
})

let tray
const createTray = () => {
  tray = new Tray(path.join(__dirname, 'images', 'icon.png'))
  tray.on('click', (event, trayBounds) => toggleWindow(trayBounds))
}

const toggleWindow = (trayBounds) => {
  if (!mainWindow) createWindow()
  if (mainWindow.isVisible()) {
    mainWindow.hide()
  } else {
    showWindow(trayBounds)
  }
}

const showWindow = (trayBounds) => {
  const positioner = new Positioner(mainWindow)
  const position = positioner.calculate('trayCenter', trayBounds)
  mainWindow.setPosition(position.x, position.y, false)
  mainWindow.show()
  mainWindow.focus()
}

let mainWindow
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 525,
    show: false,
    frame: false,
    fullscreenable: false,
    resizable: false,
    transparent: true
  })
  mainWindow.on('blur', () => mainWindow.hide())
  mainWindow.loadURL(`file://${path.join(__dirname, 'index.html')}`)
}

app.dock.hide()
