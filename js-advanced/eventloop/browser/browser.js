console.log('start');

setTimeout(() => {
    console.log('setTimeout');
    Promise.resolve().then(() => console.log('Promise in setTimeout'));
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1');
    Promise.resolve().then(() => console.log('Promise 2'));
});

console.log('end');