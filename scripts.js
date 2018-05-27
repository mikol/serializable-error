module.exports = {
  dist: 'tsc -d index.ts',
  prepublish: 'run test',
  publish: 'npm publish',
  pretest: 'run dist',
  test: 'node examples/process-send/parent.js'
}
