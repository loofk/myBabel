const letToVar = require('./let-turn-to-var')
const transformArrowFunctions = require('./transform-arrow-functions')
const transformInstanceOf = require('./transform-instanceof')
// 将直接的函数定义变为引用，减少重复定义
const transformRuntime = [
  require('@babel/plugin-transform-runtime'),
  {
    corejs: 2
  }
]

const plugins = []

plugins.push(letToVar)
plugins.push(transformArrowFunctions)
plugins.push(transformInstanceOf)
plugins.push(transformRuntime)

module.exports = plugins