const Gate = require('./Gate')

class AndGate extends Gate {
  /**
   * @param {String} name
   */
  constructor (name = null) {
    super(['a', 'b'], ['c'], name)
  }

  get gateType () {
    return 'AND'
  }

  _update () {
    this._outputs.c = this._inputs.a && this._inputs.b
    super._update()
  }
}

module.exports = AndGate
