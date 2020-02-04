
function errorMessage(id, name) {
  return "Error! function " + name + " in " + id + " not overwritten!";
}

export default  {
  id: "null",
  _factor: null,
  get operands() {return Array();},
  get arguments() {return Set();},
  evaluate(obj) { 
    throw errorMessage(this.id, "evaluate");
  },
  derivative(arg) {
    throw errorMessage(this.id, "derivative");
  },
  get factor() {
    return this._factor.factor;
  },
  get signum() {
    return this._factor.signum;
  },
  toString(handleMinus = true) {
    throw errorMessage(this.id, "toString");
  },
  opposite() {
    let obj = {...this}
    obj._factor.value *= -1;
    return obj;
  }
}