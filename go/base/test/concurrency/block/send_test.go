package block

// 什么情况下需要调用 close(ch)？
// close(ch) 的主要作用是通知接收方不再有数据发送。在以下情况下需要调用 close(ch)：

// 多个接收方：

// 如果有多个 Goroutine 从同一个 Channel 接收数据，关闭 Channel 可以通知所有接收方数据已经发送完毕。

// Range 循环：

// 如果使用 for v := range ch 从 Channel 中接收数据，必须关闭 Channel，否则 range 循环会一直阻塞。

// 避免 Goroutine 泄漏：

// 如果 Channel 的发送方不再发送数据，但接收方仍在等待数据，关闭 Channel 可以避免接收方 Goroutine 永远阻塞。

import (
	"fmt"
	"testing"
)

func send(g <-chan int) {
	fmt.Println("inner start send fn")
	for v := range g {
		fmt.Println("rst:", v)
	}
	// <-g

	fmt.Println("inner end send fn")
}

// 如果向一个无缓冲 Channel 发送数据，但没有其他 Goroutine 在接收，发送操作会一直阻塞。
func TestSend(t *testing.T) {
	ch := make(chan int)
	fmt.Println("outer start send fn")
	go send(ch)

	fmt.Println("start ch")
	ch <- 1
	// close(ch)

	fmt.Println("Done")
}
