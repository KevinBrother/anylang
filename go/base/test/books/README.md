# 补充

## 原子性：atomic.CompareAndSwapInt32 是 CPU 级别的原子指令，确保比较（当前版本号是否等于 old）和交换（设置新版本号 old+1）这两个操作不可分割

### 可是 CPU多核怎么办呢？也能保证原子吗？如何保证的？

- 硬件级别的原子性保证
    现代 CPU 通过 总线锁（Bus Lock） 或 缓存一致性协议（Cache Coherence Protocol） 来确保原子性：
    总线锁（Bus Lock）
    当一个 CPU 核心执行 CAS 指令时，它会向总线发送一个 LOCK# 信号
    这个信号会阻塞其他核心访问内存，直到 CAS 完成
    缺点是锁总线会导致其他核心暂停访问内存，性能较低
- 缓存一致性协议（如 MESI）
    现代 CPU 更常用的方式是通过缓存一致性协议：
    当核心 A 执行 CAS 修改 Version 时：
    核心 A 会将缓存行标记为 Modified 状态
    其他核心缓存的同一变量副本会被标记为 Invalid
    当其他核心下次访问 Version 时，发现缓存失效，会从主存重新读取
