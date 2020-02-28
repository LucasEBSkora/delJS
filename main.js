import del from "./del.js";

const x = del.variable("x");

let DFO = del.sum(x, del.constants.pi);
document.querySelectorAll("article").forEach((e) => {

  e.innerHTML += DFO.toHTML() + "<br>";
  e.innerHTML += DFO.derivative(x).toHTML() + "<br>";

  DFO = del.multiply(x, del.constants.pi, del.sum(x, del.constants.pi));
  e.innerHTML += DFO.toHTML() + "<br>";
  e.innerHTML += DFO.derivative(x).toHTML() + "<br>";

  DFO = del.sum(del.trig.sin(x), del.trig.cos(x));

  e.innerHTML += DFO.toHTML() + "<br>";
  e.innerHTML += DFO.derivative(x).toHTML() + "<br>";

  DFO = del.divide(DFO, x);

  e.innerHTML += DFO.toHTML() + "<br>";
  e.innerHTML += DFO.derivative(x).toHTML() + "<br>";

  
});

