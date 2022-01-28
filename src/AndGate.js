const BaseGate = require('./BaseGate')

class AndGate extends BaseGate {
  /**
   * @param {String} name
   */
  constructor (name = null) {
    super(['A', 'B'], ['C'], name)
  }

  get type () {
    return 'AND'
  }

  _update () {
    this._outputs.C = this._inputs.A && this._inputs.B
    super._update()
  }
}

module.exports = AndGate
