const path = require('path')

const {app, BrowserWindow, Tray, ipcMain} = require('electron')

const Positioner = require('electron-positioner')
const sphero = require('sphero')

const bb8 = sphero('d1eaf612c5b14531868d50d7418e1ef1')
const bb8Commands = require('./bb8-commands')

app.on('ready', () => {
  createWindow()
  createTray()

  bb8.connect(() => {
    console.log('BB-8 is ready')
    bb8.randomColor()
    ipcMain.on('dance', () => bb8Commands.dance(bb8))
    ipcMain.on('disco', () => bb8Commands.disco(bb8))
    ipcMain.on('yes', () => bb8Commands.sayYes(bb8))
    ipcMain.on('no', () => bb8Commands.sayNo(bb8))
    ipcMain.on('magic-8-ball', () => {
      Math.random() >= 0.5 ? bb8Commands.sayYes(bb8) : bb8Commands.sayNo(bb8)
    })
  })
})

let tray
const createTray = () => {
  tray = new Tray(path.join(__dirname, 'images', 'icon.png'))
  tray.on('click', (event, trayBounds) => toggleWindow(trayBounds))
}

const toggleWindow = (trayBounds) => {
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
    resizable: false
  })
  mainWindow.on('blur', () => mainWindow.hide())
  mainWindow.loadURL(`file://${path.join(__dirname, 'index.html')}`)
}

app.dock.hide()
