const Gate = require('./Gate')

class NandGate extends Gate {
  /**
   * @param {String} name
   */
  constructor (name = null) {
    super(['a', 'b'], ['c'], name)
  }

  get gateType () {
    return 'NAND'
  }

  _update () {
    this._outputs.c = !(this._inputs.a && this._inputs.b)
    super._update()
  }
}

module.exports = NandGate
