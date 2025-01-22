package block

import (
	"fmt"
	"testing"
)

func get(g chan<- int) {
	fmt.Println("inner start send fn")
	g <- 1
	fmt.Println("inner end send fn")
}

// 如果从一个无缓冲 Channel 接收数据，但没有其他 Goroutine 在发送，接收操作会一直阻塞。
func TestGet(t *testing.T) {
	ch := make(chan int)
	fmt.Println("outer start send fn")
	go get(ch)

	fmt.Println("start ch")
	<-ch
	fmt.Println("Done")
}
