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

Function.prototype.apply2 = function(context, arr) {
    const _context =  context || globalThis
    _context.fn = this;

    var result;
    if(!arr) {
        result = _context.fn()
    }else {
        result = _context.fn(...arr)
    }
    delete _context.fn;


    return result;
}

globalThis.value ='global 1';

bar.apply2(foo, ['apply2 name', 20]);
bar.apply2(null);