package concurrency

import (
	"fmt"
	"testing"
	"time"
)

func worker(id int, jobs <-chan int, results chan<- int) {
	fmt.Println("start worker fn")
	for j := range jobs {
		fmt.Println("Worker", id, "started job", j)
		time.Sleep(time.Second) // 模拟任务耗时
		fmt.Println("Worker", id, "finished job", j)
		results <- j * 2
	}
	fmt.Println("end worker fn")
}

func TestCSPs(t *testing.T) {
	jobs := make(chan int, 100)
	results := make(chan int, 100)

	// 启动 3 个 Goroutine
	for w := 1; w <= 3; w++ {
		go worker(w, jobs, results)
	}

	// 发送 5 个任务
	for j := 1; j <= 5; j++ {
		jobs <- j
	}
	// 如果不 close， worker Goroutine 永远不会退出，导致 Goroutine 泄漏（Goroutine Leak）
	close(jobs)

	// 收集结果
	for a := 1; a <= 5; a++ {
		<-results
	}
}
