module.exports = (tweets, validCommands) => {
  tweets = tweets.statuses
  if (tweets.length > 1) {
    tweets = tweets.filter(tweet => tweet.user.screen_name !== 'kuychaco')
  }
  for (let i = 0; i < tweets.length; i++) {
    const tweet = tweets[i]
    for (let j=0; j < validCommands.length; j++) {
      const command = validCommands[j]
      if (tweet.text.includes(command)) {
        const username = tweet.user.screen_name
        const imageUrl = tweet.user.profile_image_url
        const text = `${username} said to ${command}!`
        console.log(text);
        return {username, imageUrl, text, command: command.replace(/\s/g, '-')}
      }
    }
  }
}

// http://stackoverflow.com/a/2450976
function shuffle (array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
