import {constants} from "./number.js"
import DFO from "./DFO.js"

export default (...args) => {
  let ops;
  if (args.length == 0) {
    return constants.null
  } else if (Array.isArray(args[0]) && args.length == 1) {
    ops = args[0];
  } else ops = args;

  return {
    __proto__: DFO,
    id: "sum",
    _operands: ops,
    get operands() {return this._operands}, 
    
    get arguments() {
      return this._operands.map((DFO) => DFO.arguments()) //gets the set of arguments of each operand
      .reduce(
        (args, _args) => {
          _args.forEach( args.add, args)
      }, Set());
    },
    
    evaluate(obj) {
      this._operands.reduce((res, _op) => res + _op.evaluate(obj), 0);
    },

    toString() {
      return this._operands.reduce((res, _op, index) => {
        
        if (index == 0) {
          
          res += _op.toString(true); 
          
        } else {
          console.log(res)
          res += ((_op.signum == -1) ? ' - ' : ' + ') + _op.toString(false)}
        return res;
        }
      , '');

    }
    
  }
}