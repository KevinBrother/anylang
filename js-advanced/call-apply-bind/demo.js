var foo = {
    value: 1
}

function bar1() {
    console.log(this.value);
}

bar1.call(foo);

function bar2(name, age) {
    console.log('name', name)
    console.log('age', age)
    console.log(this.value);
}

bar2.call(foo, 'kevin', 18);
bar2.apply(foo, ['kevin', 18]);
barBind = bar2.bind(foo);

// node 环境指定的值
globalThis.value ='global 1';
// var value = 'global 1';

bar1.call(null);
barBind('bind', 19)

