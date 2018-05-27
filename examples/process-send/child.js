require('../../index.js')

setTimeout(() => {
  process.send(new Error('!'))
  process.exit()
}, 250)
