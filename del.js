import number, {constants} from "./number.js";
import variable from "./variable.js";
import sum from "./sum.js";
import multiply from "./multiply.js";
import trig from "./trig/trig.js";
/*
the del object is an agregator for factory functions which
generate differentiable function objects (DFO), defined in DFO.js.

*/

/* 

ways of dealing with multiplication with real numbers:

1- simply using the normal multiplication function in all cases:
pros: 
  -simpler to code
  -cleaner and more intuitive
cons:
  -harder to evaluate equality when attempting to simplify equations (3*sen(x) + 5*sen(x) would be harder to understand as 8*sen(x))

2 - adding an "factor" field to every DFO:
pros:
  -easier to assess equality
  -diminishes number of multiplication DFOs with only two terms when dealing with products with constants
cons:
  -messy as all hell
  -not intuitive

3 - add special "multiply with real constant" function:
pros: 
  -easy to code
  -easy to consider assessing equality
cons:
  -still messy, a bit unintuitive

extra argument: 
  dealing with assessing equality is going to be hard anyway, making a single case easier won't save you
  still valid dealing with sign specifically

*/



const del = {
  number,
  constants,
  variable, 
  sum,
  multiply,
  trig
}


export default del