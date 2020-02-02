let number = (value, name) => {
  return {
    id: "number",
    name: name,
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

      if (this.name) return res + this.name 
      else return res + this.factor
    },
    
    derivative() {
      constants.zero;
    },

    opposite() {
      let obj = {...this}
      obj.value *= -1;
      return obj;
    },
  }
}

const constants = {
  zero: number(0),
  unit: number(1),
  pi: number(Math.pi, '\u03C0'),
}

export {number as default, constants};