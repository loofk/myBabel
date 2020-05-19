const { transform } = require('@babel/core')

const fs = require('fs')

const path = require('path')

function babelTransform (fileName) {
  // 获取路径
  const src = 'src'
  const dist = 'dist'

  const entryPath = src + '/' + fileName

  // 读取需要转译的代码
  const code = fs.readFileSync(entryPath, 'utf-8')

  const res = transform(`${code}`, {
    plugins: [require('../plugins/es6.js')]
  })

  const outputPath = dist + '/' + fileName

  // 如果目标文件夹已存在该文件则覆盖
  if (fs.existsSync(outputPath)) {
    fs.unlinkSync(outputPath)
  }

  fs.writeFileSync(outputPath, res.code, 'utf-8')
}

module.exports = { babelTransform }