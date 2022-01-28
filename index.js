global.DEBUG = false

const AndGate = require('./src/AndGate')
const NotGate = require('./src/NotGate')
const NandGate = require('./src/NandGate')
const MemoryComponent = require('./src/MemoryComponent')

// const notGate = new NotGate()
// notGate.setInput('A', true)

// const andGate = new AndGate()
// andGate.setInput('A', true)
// andGate.setInput('B', true)

// const nandGate = new NandGate()
// nandGate.setInput('A', true)
// nandGate.setInput('B', true)

const mem = new MemoryComponent()

// mem.setInput('I', false)
// mem.setInput('S', false)

// console.log('A --->', mem.getOutput('O'))

mem.setInput('I', false)
mem.setInput('S', true)

console.log('0 --->', mem.getOutput('O'))

mem.setInput('I', false)
mem.setInput('S', false)

console.log('0 --->', mem.getOutput('O'))

mem.setInput('I', true)
mem.setInput('S', false)

console.log('0 --->', mem.getOutput('O'))

mem.setInput('I', true)
mem.setInput('S', true)

console.log('1 --->', mem.getOutput('O'))

mem.setInput('S', false)

// Should stay at true
mem.setInput('I', false)
console.log('1 --->', mem.getOutput('O'))

// "SET"
mem.setInput('S', true)
mem.setInput('S', false)
console.log('0 --->', mem.getOutput('O'))

// Should not change
mem.setInput('I', true)
console.log('0 --->', mem.getOutput('O'))
