# goroutine

## WaitGroup

- 所有 Add 必须在启动协程前完成，确保计数器初始值正确。
- 必须通过指针传递 WaitGroup，保证所有协程操作同一个实例。
- defer wg.Done() 确保无论函数如何返回，计数器都会被正确递减。

### 如何确保计数器初始值正确

- 模式 1：集中式预分配（最安全）

 [TestCentralizedPreallocation](./wait-group_test.go#L32)

- 模式 2: 动态任务数（使用通道控制）

[TestDynamic](./wait-group_test.go#L53)

- 模式 3: 递归任务

[TestRecursion](./wait-group_test.go#L109)
