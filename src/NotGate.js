const BaseGate = require('./BaseGate')

class NotGate extends BaseGate {
  /**
   * @param {String} name
   */
  constructor (name = null) {
    super(['A'], ['C'], name)
  }

  get type () {
    return 'NOT'
  }

  _update () {
    this._outputs.C = !this._inputs.A
    super._update()
  }
}

module.exports = NotGate
