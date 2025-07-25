

console.log('start');

setTimeout(() => {
    console.log('setTimeout');
    process.nextTick(() => console.log('nextTick in setTimeout'));
}, 0);

setImmediate(() => {
    console.log('setImmediate');
    process.nextTick(() => console.log('nextTick in setImmediate'));
});

process.nextTick(() => {
    console.log('nextTick 1');
    process.nextTick(() => console.log('nextTick 2'));
});

console.log('end');

// 输出顺序（可能有两种情况，取决于定时器和 setImmediate 的执行时机）：
// 情况 1：
// start → end → nextTick 1 → nextTick 2 → setTimeout → nextTick in setTimeout → setImmediate → nextTick in setImmediate

// 情况 2（定时器延迟稍高时）：
// start → end → nextTick 1 → nextTick 2 → setImmediate → nextTick in setImmediate → setTimeout → nextTick in setTimeout