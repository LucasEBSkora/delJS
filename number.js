import DFO from "./DFO.js";

let number = (value) => {
  return {
    __proto__: DFO,
    id: "number",
    value,
    
    get factor() {
      return Math.abs(this.value);
    },

    get signum() {
      return Math.sign(this.value);
    },

    get operands() {return Set()},
    get arguments() {return Set()},
    
    evaluate() {
      return this.value;
    },

    toString(handleMinus = true) {
      let res = ((handleMinus && this.signum == -1) ? '-' : '');
      return res + this.factor;
    },
    
    derivative() {
      return constants.zero;
    },

    opposite() {
      let obj = {...this};
      obj.value *= -1;
      return obj;
    },
  }
}

let namedNumber = (value, name) => {
  let ret = number(value);
  ret.name = name;
  ret.id = "namedNumber";
  ret.toString = function (handleMinus = true) {
    let res = ((handleMinus && this.signum == -1) ? '-' : '');
    return res + this.name;
  }.bind(ret);
  return ret;
}

const constants = {
  zero: number(0),
  unit: number(1),
  pi: namedNumber(Math.pi, '\u03C0'),
}

export {number as default, constants};