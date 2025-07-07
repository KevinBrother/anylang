package select_test

import (
	"fmt"
	"sync"
	"testing"
	"time"
)

func genData(ch chan<- int, wg *sync.WaitGroup) {
	defer func() {
		close(ch)
		wg.Done()
	}()

	for i := 0; i < 10; i++ {
		ch <- i
	}
}

func TestBase(t *testing.T) {
	ch1 := make(chan int, 10)
	ch2 := make(chan int, 10)

	var wg sync.WaitGroup
	wg.Add(2)

	go genData(ch1, &wg)
	go genData(ch2, &wg)

	// 使用 for-select 循环
	for {
		if ch1 == nil && ch2 == nil {
			wg.Wait()
			break
		}

		// 使用通道是否为nil来判断是否继续监听
		// 通道关闭后将其设为nil，select会自动忽略nil通道
		select {
		case i, ok := <-ch1:
			if !ok {
				ch1 = nil // 停止监听ch1
				fmt.Println("ch1 已经关闭")
				continue
			}
			fmt.Println("ch1: ", i)

		case i, ok := <-ch2:
			if !ok {
				ch2 = nil // 停止监听ch1
				fmt.Println("ch2 已经关闭")
				continue
			}
			fmt.Println("ch2: ", i)
		case <-time.After(10 * time.Nanosecond):
			fmt.Println("超时退出")
		}
	}
}
