import number, {constants} from "./number.js";
import variable from "./variable.js";
import sum from "./sum.js";
import multiply from "./multiply.js";

/*
the del object is an agregator for factory functions which
generate differentiable function objects (DFO).
these objects must contain the following attributes:
  
  id: a string identifying the type of such function (a sum, a logarithm, a exponentiation, etc...)
  operands: a getter which always returns an array of other DFOs, regardless of the number of operands the DFO takes
  arguments: a getter which returns a set of variable names, marking on which variables this DFO must be evaluated
  evaluate(): a function which takes either an object with a field corresponding to each entry in the variables() array:

    for DFO.variables() returning [x, y, z], one should call DFO.evaluate using x = 1, y = 2 and z = 3 with DFO.evaluate({x : 1, y : 2, z : 3})

  derivative(): a function which returns the PARTIAL derivative of the DFO in relation to the variable passed as a paramenter.

  _factor: a constant DFO (CDFO) identifing the factor with which this DFO is multiplied.
  
  factor: the module of the value of _factor
  signum: the sign of the value of _factor
    
  toString: returns the DFO as a string, with a boolean argument dictating whether the DFO should print its own minus sign, if applicable, or leave it to its parent.
  
  opposite: returns the opposite of the DFO

  export default (<params>, factor = 1) => {
    <simplifications>
    return {
      id:
      get operands() {return Set()},
      get arguments() {return Set()},
      evaluate(obj) {}
      derivative(arg) {}
      _factor: 
      get factor() ,
      get signum() ,
      toString(handleMinus = true) {} 
      opposite() 
    }
  }
*/



const del = {
  number,
  constants,
  variable, 
  sum,
  multiply
}


export default del