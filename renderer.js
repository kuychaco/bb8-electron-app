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

document.getElementById('tweet').onclick = () => {
  ipcRenderer.send('tweet')
}

ipcRenderer.on('tweet-found', (event, tweet) => {
  new Notification(tweet.user.screen_name, {
    body: tweet.text,
    icon: tweet.user.profile_image_url
  })
})
