class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(true)
  greet() {
    return "Hello, " + this.greeting;
  }
}

function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

const greeter = new Greeter("world");

console.log("Object.keys(greeter)", Object.keys(greeter));
console.log("Object.getOwnPropertyNames(greeter)", Object.getOwnPropertyNames(greeter));
console.log("Object.getOwnPropertyDescriptors(greeter)", Object.getOwnPropertyDescriptors(greeter));

export {};
