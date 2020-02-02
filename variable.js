import number, {constants} from "./number.js"
import DFO from "./DFO.js"

export default (name, factor = constants.unit) => {
  return {
    __proto__: DFO,
    id: "variable",
    name: name,
    _factor: factor,

    get operands() {return Set()},
    get arguments() {return Set()},
    
    evaluate(args) {
      return this.factor.evaluate()*arg[this.name];
    },

    toString(handleMinus = true) {
      if (this.factor == 0) return "0";
      if (this.factor == 1) return ((handleMinus && this.signum == -1) ? '-' : '') + this.name;
      else return factor.toString(handleMinus) + this.name;
    },

    derivative(arg) {
      (arg.name == this.name) ? this._factor : constants.null;
    },
    
  }
}