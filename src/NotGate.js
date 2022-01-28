const Gate = require('./Gate')

class NotGate extends Gate {
  /**
   * @param {String} name
   */
  constructor (name = null) {
    super(['a'], ['c'], name)
  }

  get gateType () {
    return 'NOT'
  }

  _update () {
    this._outputs.c = !this._inputs.a
    super._update()
  }
}

module.exports = NotGate
