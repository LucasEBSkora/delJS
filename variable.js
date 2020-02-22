import number, {constants} from "./number.js"
import DFO from "./DFO.js"

export default (name) => {
  return {
    __proto__: DFO,
    id: "variable",
    name,

    evaluate(args) {
      return args[this.name];
    },

    toString(handleMinus = true) {
      return ((this.negative && handleMinus) ? '-' : '' ) + this.name;
    },

    derivative(arg) {
      if (arg.name != this.name) return constants.zero;
      else if (this.negative) return constants.minusOne;
      else return constants.one;
    },
    
  }
}