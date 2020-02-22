
function errorMessage(id, name) {
  return "Error! function " + name + " in " + id + " not overwritten!";
}

//let's consider an example DFO for the function f(x, y) = Log_(y²)(3*x) called f.

export default {
  id: "null", 
  _negative: false, //if true, consider that the DFO is multiplied by -1

  get operands() {return Array();}, //for f, the returned value would be [3*x, y²]
  get arguments() {return Set();}, //for f, it would be Set(["x", "y"]) (not the DFOs, but its names)
  get negative() {return this._negative;},

  //should be called with a parameter with at least one field for each argument the DFO takes. For example, to evaluate f in x = 10 and y = -2, one should call
  //f.evaluate({x: 10, y: -2})

  evaluate(obj) { 
    throw errorMessage(this.id, "evaluate");
  },


  //returns the partial derivative of f in relation to the VDFO (variable DFO) passed as an argument.
  derivative(arg) {
    throw errorMessage(this.id, "derivative");
  },
  toString(handleMinus = true) {
    throw errorMessage(this.id, "toString");
  },
  get opposite() {
    let obj = {...this}
    obj._negative = !obj._negative;
    return obj;
  },
  get abs() {
    let obj = {...this};
    obj._negative = false;
    return obj;
  }
}