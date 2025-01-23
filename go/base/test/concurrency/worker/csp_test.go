package concurrency

import (
	"fmt"
	"testing"
)

// CSP（Communicating Sequential Processes，通信顺序进程） 核心思想是通过 通信 来共享数据，而不是通过共享内存。
func CSPWorker(i int, jobs <-chan int, rst chan<- int) {

	for j := range jobs {
		fmt.Println("worker: ", i, " start do job: ", j)
		r := j * 2
		rst <- r
		fmt.Println("worker: ", i, " done rst: ", r)
	}
}

func TestCSP(t *testing.T) {
	jobs := make(chan int, 10)
	rst := make(chan int, 10)

	fmt.Println("outer first for start ")
	for i := 0; i < 3; i++ {
		fmt.Println("inner first for start ")
		go CSPWorker(i, jobs, rst)
		fmt.Println("inner first for end ")
	}
	fmt.Println("outer first for end ============= ")

	fmt.Println("outer second for start ")
	for i := 0; i < 5; i++ {
		fmt.Println("inner second for start ")
		jobs <- i
		fmt.Println("inner second for end ")
	}
	close(jobs)
	fmt.Println("outer second for end  =============")

	fmt.Println("outer third for start ")
	// for r := range rst {
	// 	fmt.Println("inner third for start ")
	// 	fmt.Println("rst: ", r)
	// 	fmt.Println("inner third for end ")
	// }
	for a := 1; a <= 5; a++ {
		<-rst
	}
	fmt.Println("outer third for end ")
}
