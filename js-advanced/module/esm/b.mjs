// import { a, setA } from "./a.mjs";

console.log("running b.mjs");

// console.log("before setA a val", a);

// console.log("setA to aa");

// setA("aa");

// console.log("after setA a val", a);

let b = "b";

const setB = (newB) => {
  b = newB;
}

const getB = () => {
  return b;
};

function fnc(c) {
  console.log("c", c);
}

export { b, setB, getB };