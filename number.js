import DFO from "./DFO.js";

let number = (value) => {
  return {
    __proto__: DFO,
    id: "number",
    value,
    
    get abs() {
      return Math.abs(this.value);
    },

    get negative() {
      return Math.sign(this.value);
    },

    get operands() {return Set()},
    get arguments() {return Set()},
    
    evaluate() {
      return this.value;
    },

    toString(handleMinus = true) {
      return ((handleMinus && this.negative == -1) ? '-' : '') + this.abs;
    },
    
    derivative() {
      return constants.zero;
    },

    get opposite() {
      let obj = {...this};
      obj.value *= -1;
      return obj;
    },

    equals(dfo) {
      return (dfo.id == "number" || dfo.id == "namedNumber") && 
        (dfo.value == this.value);
    },
  
    summable(dfo) {
      return (dfo.id == this.id);
    }
      
  }
}

let namedNumber = (value, name) => {
  let ret = number(value);
  ret.name = name;
  ret.id = "namedNumber";
  ret.toString = function (handleMinus = true) {
    return ((handleMinus && this.signum == -1) ? '-' : '') + this.name;
  }.bind(ret);
  return ret;
}

const constants = {
  zero: number(0),
  one: number(1),
  minusOne: number(-1),
  pi: namedNumber(Math.pi, '\u03C0'),
}

export {number as default, constants};