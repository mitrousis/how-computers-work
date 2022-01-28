const EventEmitter = require('events')
const ON_INPUT_CHANGED = 'on_input_changed'

class Gate extends EventEmitter {
  /**
   *
   * @param {Array <String>} inputNames
   * @param {Array <String>} outputNames
   */
  constructor (inputNames, outputNames, name) {
    super()

    this._inputs = inputNames.reduce((prev, curr) => {
      prev[curr] = false
      return prev
    }, {})

    this._outputs = outputNames.reduce((prev, curr) => {
      prev[curr] = false
      return prev
    }, {})

    this._name = name || this._getRandomName()
  }

  /**
   * @param {String} inputName
   * @param {Boolean} value
   */
  setInput (inputName, value) {
    this._inputs[inputName] = value
    this._update()
  }

  /**
   * @param {String} outputName
   * @returns {Boolean} the value of the output
   */
  getOutput (outputName) {
    return this._outputs[outputName]
  }

  get gateType () {
    return 'base'
  }

  get name () {
    return this._name
  }

  /**
   * Core update logic, should overwrite in subclass and call super
   */
  _update () {
    if (global.DEBUG) {
      console.log(this._name, this._inputs, this._outputs)
    }
    this.emit(ON_INPUT_CHANGED)
  }

  _getRandomName () {
    return `${this.gateType}_${Math.floor(Math.random() * 16777215).toString(16)}`
  }
}

module.exports = Gate
