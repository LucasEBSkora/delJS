import number, {constants} from "./number.js"
import DFO from "./DFO.js"

const sum = (...args) => {

  let ops;
  //if no arguments are passed, returns 0
  if (args.length == 0) {
    return constants.null;
  } else if (Array.isArray(args[0]) ) {
    //if the argument passed is already an array, uses it
    ops = args[0];
  } else ops = args;

  let numberSum = 0;
  ops = ops.filter((op) => {
    if (op.id == "number") {
      numberSum += op.value;
      return false;
    } 

    return true;
  })

  if (numberSum != 0) ops.unshift(number(numberSum));



  if (ops.length == 0) return constants.zero;
  else if (ops.length == 1) return ops[0];
  return {
    __proto__: DFO,
    id: "sum",
    _operands: ops,
    get operands() {return this._operands}, 
    
    get arguments() {

      return this._operands.map((DFO) => DFO.arguments()) //gets the arguments from each operand
      .reduce( //and them adds all of them to an empty set, which is returned
        (totalArgs, opArgs) => {
          opArgs.forEach( totalArgs.add, totalArgs);
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
          console.log(_op);
          res += ((_op.negative) ? ' - ' : ' + ') + _op.toString(false)}
        return res;
        },
       '');
    },

    toHTML() {

      return this._operands.reduce((res, _op, index) => {
        
        if (index == 0) {
          
          res += _op.toHTML(true); 
          
        } else {
          console.log(_op);
          res += ((_op.negative) ? ' - ' : ' + ') + _op.toHTML(false)}
        return res;
        },
       '');
    },

    derivative(arg) {
      return sum(this._operands.map(_op => _op.derivative(arg)));
    }
    
  }
}

export default sum;