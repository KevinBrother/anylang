console.log("running a.mjs");

import { b, setB, getB } from "./b.mjs";

console.log("before setB b val", b);

console.log("setB to bb");

setB("bb");
// b = "bb";

console.log("after setB b val", b);

console.log("getB", getB());

var a = "a";

function setA(newA) {
  a = newA;
}

export { a, setA };
