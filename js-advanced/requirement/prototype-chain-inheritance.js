// 原型链继承

function Animal() {
    this.inner = function () {
        console.log('inner')
    }
}

Animal.prototype.eat = function () {
    console.log('eat')
}


function Dog() {
    this.drink = function () {
        console.log('drink')
    }
}

Dog.prototype = new Animal();

Dog.prototype.bark = function () {
    console.log('bark')
}

var dog = new Dog();
dog.drink();
dog.eat();
dog.bark();
dog.inner();





