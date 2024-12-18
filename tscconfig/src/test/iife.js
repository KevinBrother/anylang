(function (fn) {
  const name = "inner name"; // 定义一个局部变量 name
  console.log("iife"); // 输出 "iife"
  fn(name); // 调用传入的函数 fn，并将 name 作为参数传递
})(function (inner) {
  console.log("iife2"); // 输出 "iife2"
  console.log("getInnerName", inner); // 输出传入的参数 inner
});
