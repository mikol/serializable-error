const assert = require('assert')
const {fork} = require('child_process')

const forked = fork(`${__dirname}/child.js`)

const timeoutId =
  setTimeout(() => assert.fail('😞  Timed out before receiving message'), 2000)

forked.on('message', (x) => {
  clearTimeout(timeoutId)

  assert(x && x.type === 'Error' && x.message === '!' && Array.isArray(x.stack),
    '😞  Expected message to be a serialized error object')

  console.log('🤘🏼')
})
