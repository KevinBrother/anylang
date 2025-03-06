
console.log("running c.cjs");

let b = "c";

function setB(newB) {
  b = newB;
}

function fnc(c) {
  console.log("c", c);
}

module.exports = { b, setB };