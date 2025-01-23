package concurrency

import (
	"fmt"
	"testing"
	"time"
)

func Service() string {
	time.Sleep(time.Millisecond * 500)
	return "Done"
}

func AsyncService() <-chan string {
	reCh := make(chan string, 1)

	go func() {
		rst := Service()
		fmt.Println("returned result")
		reCh <- rst
		fmt.Println("service exited")
	}()

	return reCh
}

func TestAbc(t *testing.T) {
	select {
	case rst := <-AsyncService():
		fmt.Println("get result: ", rst)
	case rst := <-time.After(time.Millisecond * 400):
		fmt.Println("time out", rst)
	}
}
