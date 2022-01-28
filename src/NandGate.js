const BaseGate = require('./BaseGate')

class NandGate extends BaseGate {
  /**
   * @param {String} name
   */
  constructor (name = null) {
    super(['A', 'B'], ['C'], name)
  }

  get type () {
    return 'NAND'
  }

  _update () {
    this._outputs.C = !(this._inputs.A && this._inputs.B)
    super._update()
  }
}

module.exports = NandGate
