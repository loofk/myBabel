const letToVar = require('./let-turn-to-var')
const transformArrowFunctions = require('./transform-arrow-functions')
const transformInstanceOf = require('./transform-instanceof')

const plugins = []

plugins.push(letToVar)
plugins.push(transformArrowFunctions)
plugins.push(transformInstanceOf)

module.exports = plugins