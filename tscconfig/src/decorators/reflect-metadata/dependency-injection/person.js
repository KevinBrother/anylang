class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}

// Object.getPrototypeOf 获取的是参数的 __proto__ 属性
console.log("getPrototypeOf 相关=====");
console.log(Object.getPrototypeOf(Person));

console.log(Object.getPrototypeOf(new Person('章三', 18)));

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(new Person('章三', 18))));

console.log("getOwnPropertyNames 相关=====");
console.log(Object.getOwnPropertyNames(Person));
console.log(Object.getOwnPropertyNames(Person.prototype));

