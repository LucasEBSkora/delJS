import DFO from "../DFO.js";
import number, {constants} from "../number.js"
import cos from "./cos.js";
import multiply from "../multiply.js";
export default (op, neg = false) => {
  
  if (op.id == "number" || op.id == "namedNumber") {
    let value = op.evaluate();
    if (neg) {
      if (value < 0) neg = false;
      else neg = true;
    }

    value = Math.abs(value);
    while (value >= 2*Math.PI) value -= 2*Math.PI;

    value = Math.sen(value)* (neg ? -1 : 1);
    return number(value);
  }

  return {
    __proto__: DFO,
    id: "sin",
    _negative: neg,
    op,

    get operands() {return [this.op]},
    get arguments() {return this.op.arguments},

    evaluate(args) {
      return Math.sin(this.op.evaluate(args));
    },

    toString(handleMinus = true) {
      return ((this.negative && handleMinus) ? '-' : '' ) + "sin(" + this.op.toString() + ")";
    },

    derivative(arg) {
      return multiply(cos(this.op, this.negative), this.op.derivative(arg));
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