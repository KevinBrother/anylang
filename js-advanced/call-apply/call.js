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

Function.prototype.call2 = function(context) {
    const _context =  context || globalThis
    let args = [];
    for(let i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    
    _context.fn = this;
    // _context.fn = this || window;
    const result = _context.fn(...args);
    delete _context.fn;

    return result;
}

globalThis.value ='global 1';

bar.call2(foo, 'call2 name', 20);
bar.call2(null);