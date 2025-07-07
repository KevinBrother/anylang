package goroutines

import (
	"fmt"
	"testing"
	"time"
)

func TestGoroutines(t *testing.T) {

	for i := 0; i < 10; i++ {
		// go func(i int) {
		// 	fmt.Println(i)
		// }(i)
		go func() {
			fmt.Println(i)
		}()
	}

	time.Sleep(time.Millisecond * 50)
}

func TestChannel(t *testing.T) {
	ch := make(chan int, 1)

	go func() {
		for i := 0; i < 1; i++ {
			ch <- i
		}
		close(ch)
	}()

	for v := range ch {
		fmt.Println("val:", v)
	}

	fmt.Println("done")
}
