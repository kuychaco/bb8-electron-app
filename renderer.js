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

document.getElementById('magic-8-ball').onclick = () => {
  ipcRenderer.send('magic-8-ball')
}

document.getElementById('tweet').onclick = () => {
  ipcRenderer.send('tweet')
}

ipcRenderer.on('tweet-found', (event, {username, imageUrl, text}) => {
  new Notification(username, {
    body: text,
    icon: imageUrl
  })
})
