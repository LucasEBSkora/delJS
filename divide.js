import DFO from "./DFO.js";
import multiply from "./multiply.js";
import sum from "./sum.js";

const divide = (numerator, denominator, negative = false) => {
  
  return {
    __proto__: DFO,
    id: "division",
    _numerator : numerator,
    _denominator: denominator,
    _negative: negative,

    evaluate(args) {
      return this._numerator.evaluate(args)/this._denominator.evaluate(args);
    },

    toString(handleMinus = true) {
      return ((handleMinus && this.negative) ? '-' : '') +  '(' + this._numerator.toString() + ')/(' + this._denominator.toString() + ')';
    },

    //FIX - center
    toHTML(handleMinus = true) {
      return ((handleMinus && this.negative) ? '-' : '') + 
      '<span class="delJS-divide">' + 
      '<span class="delJS-divide-numerator"> (' + this._numerator.toHTML() + ')</span>' +
      '<span class="delJS-divide-denominator"> (' + this._denominator.toHTML() + ')</span>' +
      '</span>';
      
    },

    //fix when adding 
    derivative(arg) {
      return divide(sum(multiply(this._numerator.derivative(arg),this._denominator), multiply(this._numerator, this._denominator.derivative(arg))), multiply(this._denominator, this._denominator), this.negative);
    },

    equals(dfo) {
      return (dfo.id == this.id) && 
        (this._numerator.equals(dfo._numerator)) &&
        (this._denominator.equals(dfo._denominator));
        
    },

    summable(dfo) {
      return this.equals(dfo);
    }
    
  }
}

export default divide;