const { spawn } = require("child_process");


/* , (error, stdout, stderr) => {
    console.log('{error, stdout, stderr}', { error, stdout, stderr })
} */
const child = spawn('node', ['./second.js'])


child.on('exit', (code, signal) => {
    console.log('child %d exit, code: %d, signal: %s ', child.pid, code, signal)
})

child.on('close', (code, signal) => {
    console.log('child %d close, code: %d, signal: %s ', child.pid, code, signal)
})

console.log('child.processId: ', child.pid)

setInterval(() => {
    console.log('1', 1)
}, 1000)
