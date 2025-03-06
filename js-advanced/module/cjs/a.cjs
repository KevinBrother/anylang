
console.log("running a.cjs");

const { b, setB, getB } = require("./b.cjs");

console.log("before setB b val", b);


console.log("setB to bb");

setB("bb");

console.log("after setB b val", b);

console.log("getB", getB());

var a = "a";

function setA(newA) {
  a = newA;
}

module.exports = { a, setA };