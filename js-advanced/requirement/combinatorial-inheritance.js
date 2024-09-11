// 组合继承
// 1. 原型链继承方法，继承父类的原型链的属性和方法
// 2. 盗用构造函数方法继承父类的实例属性
function Animal(name = 'animal') {
    this.name = name
    this.inner = function () {
        console.log('inner')
    }
}

Animal.prototype.eat = function () {
    console.log('eat')
}

function Dog(name) {
    Animal.call(this, name);
}

Dog.prototype = new Animal();

Dog.prototype.bark = function () {
    console.log('bark')
}

var dog = new Dog();


