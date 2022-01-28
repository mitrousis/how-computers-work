global.DEBUG = true

const AndGate = require('./src/AndGate')
const NotGate = require('./src/NotGate')
const NandGate = require('./src/NandGate')

const notGate = new NotGate()
notGate.setInput('a', true)

const andGate = new AndGate()
andGate.setInput('a', true)
andGate.setInput('b', true)

const nandGate = new NandGate()
nandGate.setInput('a', true)
nandGate.setInput('b', true)
