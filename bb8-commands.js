// commands from https://github.com/mintuz/BB8-Commander. Thanks Adam Bulmer!

module.exports = {
  dance: (bb8) => {
    console.log("BB-8 got moves!!")
    const movesTimer = setInterval(() => {
      const direction = Math.floor(Math.random() * 360)
      const distance = Math.floor(Math.random() * (150 - 10)) + 10
      bb8.roll(distance, direction)
     }, 100)

    const colorTimer = setInterval(() => {
      bb8.randomColor()
    }, 250)

    setTimeout(() => {
      clearInterval(movesTimer)
      clearInterval(colorTimer)
      bb8.roll(0, 0)
    }, 7000)
  }
}
