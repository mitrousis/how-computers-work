const BaseComponent = require('./BaseComponent')
const NandGate = require('./NandGate')

class MemoryComponent extends BaseComponent {
  constructor (name) {
    super(['I', 'S'], ['O'], name)

    this._nand1 = new NandGate(this._name + '_NAND1')
    this._nand2 = new NandGate(this._name + '_NAND2')
    this._nand3 = new NandGate(this._name + '_NAND3')
    this._nand4 = new NandGate(this._name + '_NAND4')
  }

  get type () {
    return 'MEMORY'
  }

  _update () {
    this._nand1.setInput('A', this._inputs.I)
    this._nand1.setInput('B', this._inputs.S)

    // Connect 2 to 1
    this._nand2.setInput('A', this._nand1.getOutput('C'))
    this._nand2.setInput('B', this._inputs.S)

    // Connect 3
    this._nand3.setInput('A', this._nand1.getOutput('C'))
    this._nand3.setInput('B', this._nand4.getOutput('C'))

    // Connect 4
    this._nand4.setInput('A', this._nand3.getOutput('C'))
    this._nand4.setInput('B', this._nand2.getOutput('C'))

    // Back to 3
    this._nand3.setInput('B', this._nand4.getOutput('C'))

    this._outputs.O = this._nand3.getOutput('C')

    super._update()
  }
}

module.exports = MemoryComponent
