// instanceof 后面构造函数的 prototype 属性是否出现在 第一个参数的原型链上

console.log(typeof 1);
console.log(typeof "abc");
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Symbol);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function a() {});

console.log(Object.prototype.toString.call(1));
console.log(Object.prototype.toString.call("abc"));
console.log(Object.prototype.toString.call(false));
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(undefined));
console.log(Object.prototype.toString.call(Symbol));
console.log(Object.prototype.toString.call({}));
console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call(function a() {}));


function myTypeof(args) {
    return Object.prototype.toString.call(args).slice(8, -1).toLowerCase();
}

console.log(myTypeof(1));
console.log(myTypeof("abc"));
console.log(myTypeof(false));
console.log(myTypeof(null));
console.log(myTypeof(undefined));
console.log(myTypeof(Symbol));
console.log(myTypeof({}));
console.log(myTypeof([]));
console.log(myTypeof(function a() {}));

let oString = Object.prototype.toString;
console.log(oString.call(1));

// 类型定义、toString 实现、call 的使用、slice 的使用