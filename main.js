import del from "./del.js";

const x = del.variable("x");

let DFO = del.sum(x, del.constants.pi);
console.log(DFO.toString());
console.log(DFO.derivative(x).toString());

DFO = del.multiply(x, del.constants.pi, del.sum(x, del.constants.pi));
console.log(DFO.toString());
console.log(DFO.derivative(x).toString());