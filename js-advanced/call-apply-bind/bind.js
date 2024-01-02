var foo = {
    value: 1
}

function bar(name, age) {
    console.log('name', name)
    console.log('age', age)
    console.log(this.value);
}

/* 
// 目标变为下面的就行
var foo = {
    value: 1,
    bar: function(name, age) {
        console.log('name', name)
        console.log('age', age)
        console.log(this.value);
    }
}; */

Function.prototype.bind2 = function(context) {
    const self = this;
    const args = Array.prototype.slice.call(arguments, 1);
    return function() {
        console.log('args', [...args, ...arguments])
        self.apply(context, [...args, ...arguments]);
    }
}

globalThis.value ='global 1';

const bar1 = bar.bind2(foo);
bar1('bind1', 11)
const bar2 = bar.bind2(null);
bar2('bind2', 22)
const bar3 = bar.bind2(foo, 'bar3 name', 'bar3 age');
bar3()
