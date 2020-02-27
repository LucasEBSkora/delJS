import DFO from "../DFO.js";
import number, {constants} from "../number.js"
import sin from "./sin.js";
import multiply from "../multiply.js";
export default (op, neg = false) => {
  
  if (op.id == "number" || op.id == "namedNumber") {
    let value = op.evaluate();
    value = Math.abs(value);
    while (value >= 2*Math.PI) value -= 2*Math.PI;


    value = Math.cos(value)* (neg ? -1 : 1);
    return number(value);
  }
  
  return {
    __proto__: DFO,
    id: "cos",
    op,
    _negative: neg,
    get operands() {return [op]},
    get arguments() {return op.arguments()},

    evaluate(args) {
      return Math.cos(op.evaluate(args));
    },

    toString(handleMinus = true) {
      return ((this.negative && handleMinus) ? '-' : '' ) + "cos(" + op.toString() + ")";
    },

    derivative(arg) {
      return multiply(sin(op, !this.negative), op.derivative(arg));
    },

    equals(dfo) {
      return (dfo.id == this.id) && 
        op.equals(dfo.operands[0]);
    },

    summable(dfo) {
      return this.equals(dfo);
    }
  }
}