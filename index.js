const { babelTransform } = require('./core/index')
const path = require('path')
const fs = require('fs')

const files = fs.readdirSync(path.resolve(__dirname, 'src'))

files.forEach(file => {
  babelTransform(file)
})