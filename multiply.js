import {constants} from "./number.js";
import sum from "./sum.js";
import DFO from "./DFO.js";

const multiply = (...args) => {
  let ops;
  if (args.length == 0) {
    return constants.null;
  } else if (Array.isArray(args[0]) ) {
    ops = args[0];
  } else ops = args;

  let f = 1;

  //TODO: simplifications

  return {
    __proto__: DFO,
    id: "multiply",
    _ops: ops,
    get operands() {return Set(_ops)},
    get arguments() {
      return this._operands.map((DFO) => DFO.arguments()) //gets the set of arguments of each operand
      .reduce(
        (args, _args) => {
          _args.forEach( args.add, args)
      }, Set());
    },
    evaluate(obj) {
      this._operands.reduce((res, _op) => res * _op.evaluate(obj), 0);
    },
    derivative(arg) {
      let terms = [];
      
      this._ops.forEach((term, ind, arr) => {
        let narr = [...arr];
        narr[ind] = term.derivative(arg);
        terms[ind] = multiply(narr);
      });

      return sum(terms);
    },
    _factor: f,
    get factor() {
      return Math.abs(this._factor);
    },
    get signum() {
      return Math.sign(this._factor);
    },
    toString(handleMinus = true) {
      let ret = (this.signum == -1) ? '-' : '';
      ret += (this.factor != 1) ? this.factor :  '';
      this._ops.forEach((op) => {
        ret += '(' + op.toString() + ')'; 
      });

      return ret;
    }, 
  }
};

export default multiply;