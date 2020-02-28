import number, {constants} from "./number.js";
import sum from "./sum.js";
import DFO from "./DFO.js";

const multiply = (...args) => {
  let ops;
  if (args.length == 0) {
    return constants.null;
  } else if (Array.isArray(args[0]) ) {
    ops = args[0];
  } else ops = args;

  let accum = 1;
  ops = ops.filter((op) => {
    if (op.id == "number") {
      accum *= op.value;
      return false;
    } 

    return true;
  })


  
  if (accum == 0) return constants.zero;
  else if (accum != 1) ops.unshift(number(accum));


  if (ops.length == 1) return ops[0];
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
        //copies the array
        let narr = [...arr];
        //makes the current index be its derivative
        narr[ind] = term.derivative(arg);
        //makes a new term with the multiplication
        terms[ind] = multiply(narr);
      });

      return sum(terms);
    },

    toString(handleMinus = true) {
      
      let ret = '';
      
      this._ops.forEach((op) => {
        ret += '(' + op.toString() + ')'; 
      });

      return ret;
    },
    
    toHTML(handleMinus = true) {
      let ret = '';
      
      this._ops.forEach((op) => {
        ret += '(' + op.toHTML() + ')'; 
      });

      return ret;
    }
  }
};

export default multiply;