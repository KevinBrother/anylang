const fs = require('fs');

// 1. timers 阶段执行 setTimeout
setTimeout(() => {
    console.log('setTimeout');
    process.nextTick(() => console.log('nextTick in setTimeout')); // 阶段结束后执行
    Promise.resolve().then(() => console.log('Promise in setTimeout')); // 后于 nextTick
}, 0);

// 2. poll 阶段执行 I/O 回调
fs.readFile(__filename, () => {
    console.log('fs.readFile');
    process.nextTick(() => console.log('nextTick in fs.readFile')); // 阶段结束后执行
    Promise.resolve().then(() => console.log('Promise in fs.readFile')); // 后于 nextTick
});

// 3. check 阶段执行 setImmediate
setImmediate(() => {
    console.log('setImmediate');
    process.nextTick(() => console.log('nextTick in setImmediate')); // 阶段结束后执行
    Promise.resolve().then(() => console.log('Promise in setImmediate')); // 后于 nextTick
});

// 主线程代码（属于 poll 阶段前的初始化）
process.nextTick(() => console.log('nextTick 1')); // 主线程结束后立即执行
Promise.resolve().then(() => console.log('Promise 1')); // 后于 nextTick