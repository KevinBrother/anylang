const net = require('net');
const fs = require('fs');

// 读取文件（异步操作）
fs.readFile(__filename, (err, data) => {
    console.log('File read complete'); // 此回调在 poll 阶段执行
});

// 定时器和 setImmediate 的执行顺序受 poll 阶段影响
setTimeout(() => console.log('setTimeout'), 0);
setImmediate(() => console.log('setImmediate'));

// 连接一个不存在的服务器（触发 ECONNREFUSED 错误）
const socket = net.connect(18080, 'localhost', () => {
    console.log('Connected');
});

socket.on('error', (err) => {
    console.log('Error:', err.code); // 此回调在 I/O callbacks 阶段执行
});

// setTimeout -> error -> File read complete ->  setImmediate