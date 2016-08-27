const buble = require('rollup-plugin-buble')

module.exports = {
  entry: './index.js',
  dest: 'dist/composable-normalize.js',
  moduleName: 'composableNormalize',
  format: 'umd',
  plugins: [
    buble()
  ]
}
