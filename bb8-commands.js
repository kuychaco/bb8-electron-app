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
  },

  disco (bb8) {
    console.log('disco time')
    const makeColorGradient = (frequency1, frequency2, frequency3, phase1, phase2, phase3, center, width, len) => {
      if (center == undefined) center = 128
      if (width == undefined) width = 127
      if (len == undefined) len = 50

      const arr = []
      for (let i = 0; i < len; ++i) {
        const red = Math.sin(frequency1*i + phase1) * width + center
        const grn = Math.sin(frequency2*i + phase2) * width + center
        const blu = Math.sin(frequency3*i + phase3) * width + center
        arr.push({red: red, green: grn, blue: blu})
      }
      return arr
    }
    let cycle = makeColorGradient(.1, .1, .1, 0, 2, 4)

    let current = 0
    const nextColor = () => {
      const color = cycle[current]
      bb8.color(color)
      current++
      if (current >= cycle.length) current = 0
    }
    const interval = setInterval(nextColor, 33)
    setTimeout(() => clearInterval(interval), 5000)
  },

  sayYes: (bb8) => {
    console.log('yup yup')
    bb8.setRawMotors({lmode: 2, lpower: 80, rmode: 2, rpower: 80})
    setTimeout(() => bb8.setRawMotors({lmode: 1, lpower: 80, rmode: 1, rpower: 80}), 100)
    setTimeout(() => bb8.setRawMotors({lmode: 2, lpower: 80, rmode: 2, rpower: 80}), 200)
    setTimeout(() => bb8.setRawMotors({lmode: 1, lpower: 80, rmode: 1, rpower: 80}), 300)
    setTimeout(() => {
      bb8.setRawMotors({lmode: 0, lpower: 0, rmode: 0, rpower: 0})
      bb8.setStabilization(1)
    }, 400)
  },

  sayNo: (bb8) => {
    console.log('nope')
    bb8.roll(0,60)
    setTimeout(() => bb8.roll(0,300), 200)
    setTimeout(() => bb8.roll(0,60), 400)
    setTimeout(() => bb8.roll(0,300), 600)
    setTimeout(() => bb8.roll(0,60), 400)
    setTimeout(() => bb8.roll(0,300), 600)
    setTimeout(() => bb8.roll(0,0), 800)
  }
}
