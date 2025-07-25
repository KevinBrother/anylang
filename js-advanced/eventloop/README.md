# JavaScript 事件循环

## 浏览器的事件循环

### 执行顺序

- 执行一个宏任务（如 setTimeout 回调）。
- 清空微任务队列（所有 Promise.then、queueMicrotask 等）。
- 渲染 UI（如果需要）。
- 重复步骤 1-3。

## Node.js 的事件循环

### 阶段划分（简化版）

- timers：执行 setTimeout 和 setInterval 的回调。
- I/O callbacks：处理网络、文件等 I/O 操作的回调。
- idle, prepare：内部使用。
- poll：用户级回调，检索新的 I/O 事件，执行 I/O 相关回调。
- check：执行 setImmediate 的回调。
- close callbacks：处理关闭事件（如 socket.on('close')）。

<!-- 怎么体现循环了？ -->

### 微任务执行时机

- 每个阶段结束后，会清空微任务队列（包括 Promise.then 和 queueMicrotask）。
- process.nextTick() 会在当前阶段执行结束后立即执行，优先级高于其他微任务。
