function Otaku (name, age) {
    this.name = name;
    this.age = age;

    this.habit = 'Games';
}


// 因为缺乏锻炼的缘故，身体强度让人担忧
Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

var person = new Otaku('Kevin', '18');

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // 60

person.sayYourName(); // I am Kevin


function myNew(f) {
    const args = Array.prototype.splice.call(arguments, 1)

    /*     
    const obj = {f};
    obj.f(...args);
    delete obj.f;
     */

    f.apply(obj, args);
    obj.__proto__ = f.prototype;
    return obj;
}


var p2 = myNew(Otaku,'Kevin', '18');