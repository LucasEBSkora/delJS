const errorMessage = "Error! This function must be overwritten!";

export default  {
  id: "null",
  _factor: null,
  get operands() {return Set();},
  get arguments() {return Set();},
  evaluate(obj) { 
    throw errorMessage;
  },
  derivative(arg) {
    throw errorMessage;
  },
  get factor() {
    return this._factor.factor;
  },
  get signum() {
    return this._factor.signum;
  },
  toString(handleMinus = true) {
    throw errorMessage;
  },
  opposite() {
    let obj = {...this}
    obj._factor.value *= -1;
    return obj;
  }
}