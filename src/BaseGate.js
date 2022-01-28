const BaseComponent = require('./BaseComponent')

class BaseGate extends BaseComponent {
  /**
   * @param {Array <String>} inputNames
   * @param {Array <String>} outputNames
   * @param {String} name
   */
  constructor (inputNames, outputNames, name = null) {
    super(inputNames, outputNames, name)
  }

  get type () {
    return 'base-gate'
  }
}

module.exports = BaseGate
