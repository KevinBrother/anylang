const fs = require('fs');
const net = require('net');

console.log('=== 开始第一次事件循环 ===');

// 首次事件循环 - timers阶段
setTimeout(() => {
    console.log('\n=== 第二次事件循环 - timers阶段 ===');
    console.log('执行 setTimeout 回调');

    // 微任务会在阶段结束后执行
    process.nextTick(() => console.log('timers 阶段的 nextTick'));
    Promise.resolve().then(() => console.log('timers 阶段的 Promise'));

    // 安排一个在check阶段执行的任务
    setImmediate(() => {
        console.log('\n=== 第三次事件循环 - check阶段 ===');
        console.log('执行 setImmediate 回调');
    });

    // 安排一个在下次timers阶段执行的任务
    setTimeout(() => {
        console.log('\n=== 第四次事件循环 - timers阶段 ===');
        console.log('执行嵌套的 setTimeout 回调');
    }, 0);
}, 0);

// 首次事件循环 - poll阶段（I/O操作）
fs.readFile(__filename, (err, data) => {
    console.log('\n=== 第二次事件循环 - poll阶段（I/O回调） ===');
    console.log('执行 fs.readFile 回调');

    // 微任务会在阶段结束后执行
    process.nextTick(() => console.log('poll 阶段的 nextTick'));
    Promise.resolve().then(() => console.log('poll 阶段的 Promise'));
});

// 首次事件循环 - 模拟网络I/O
const server = net.createServer();
server.listen(18080, () => {
    console.log('\n=== 第二次事件循环 - poll阶段（网络监听） ===');
    console.log('服务器已启动，监听端口 8080');

    // 关闭服务器，触发close callbacks阶段
    server.close(() => {
        console.log('\n=== 第二次事件循环 - close callbacks阶段 ===');
        console.log('服务器已关闭');
    });
});

// 首次事件循环 - 主线程结束后的微任务
process.nextTick(() => console.log('\n主线程的 nextTick'));
Promise.resolve().then(() => console.log('主线程的 Promise'));

console.log('=== 首次事件循环 - 主线程执行完毕 ===');

// 