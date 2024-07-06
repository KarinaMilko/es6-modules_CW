// import default
// 1
// import sum from "./math.js"; // import moduleName from 'module';

// console.log("sum(1,2) :>> ", sum(1, 2));

// 2
// import Math from "./math.js";
// console.log(Math);
// Object
// mult: (a, b) => a * b
// sum: (a, b) => a + b
// [[Prototype]]: Object

// console.log(Math.sum(1, 2));
//-------------------------------------------------
// named import
// 1

import { sum, mult, PI } from "./math.js";
console.log(sum(10, 20), PI);

// 2 (*все зібрати і назвати Math)
import * as Math from "./math.js";
console.log(Math);
console.log(Math.sum(10, 20));
