const letToVar = require('./let-turn-to-var.js')
const transformArrowFunctions = require('./transform-arrow-functions')

const plugins = []

plugins.push(letToVar)
plugins.push(transformArrowFunctions)

module.exports = plugins