# 性能优化

## 性能监控

- 在 Performance 栏中勾选 Memory, 查看 时间轴功能，查看页面加载、解析、渲染、执行等各个阶段的时间消耗，以及内存的分配与回收情况

## 内存泄漏

### 全局变量

- 通过 Memory 的 Heap snapshot 快照功能， 保存操作前后的两次快照, 通过 filter 中 搜索 global object，对比全局变量是否被回收

### DOM 操作（分离的 DOM 节点）

- 通过 Memory 的 Heap snapshot 快照功能， 保存操作前后的两次快照, 通过 filter 中 搜索 detached，对比 DOM 节点是否分离(分离的 DOM 节点不会被垃圾回收机制回收)

### 事件监听器

### 闭包

- 通过 Memory 的 Allocations on Timeline 时间轴功能，查看内存的分配与回收情况，蓝色的为分配，灰色的为回收，如果蓝色的内存一直不回收，则可能存在内存泄漏
