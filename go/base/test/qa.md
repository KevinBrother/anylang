# QA

## 如何理解 comparable

- comparable 是 排除了 slice map func 后的 any。 map 的key 必须是 可比较（==、 !=）的

### 如何理解 channel 不存在内部状态的隐式修改？往通道里增加了 内容，不会有影响吗

- 这里的 “内部状态的隐式修改” 并非指 channel 的缓冲区内容，而是指 channel 作为一个对象的核心标识不会被修改。
- Map 的内容修改会导致内部结构变化
- Slice 的长度和容量变化可能影响语义

## var x interface{} = 10, 如何理解 interface

- interface{} 和 any 本质上是完全等价的，它们都表示任意类型。any 是 Go 1.18 引入的泛型特性中的一个语法糖，用于简化 interface{} 的写法
