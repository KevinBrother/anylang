package concurrency

import (
	"fmt"
	"sync"
	"testing"
	"time"
)

var count = 0
var mu sync.Mutex

func add(n int) {
	for i := 0; i < 5000; i++ {
		mu.Lock()
		count++
		mu.Unlock()
	}
	fmt.Println(n, " is done")

}

func TestUnSafe(t *testing.T) {
	// 获取 cpu 的核心数
	go add(1) // 1 cpu 中
	go add(2) // 2 cpu 中

	time.Sleep(time.Second * 3)
	fmt.Println("count: ", count)
}
