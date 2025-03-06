// const c = require("./cname.cjs");

console.log("running c.cjs");

// console.log("before setA a val", a);

// console.log("setA to aa");

// setA("aa");

// console.log("after setA a val", a);
// console.log("c.b", c.b);
let b = "b";

function setB(newB) {
  b = newB;
}

function getB() {
  return b;
}

function fnc(c) {
  console.log("c", c);
}

module.exports = { b, setB, getB };
