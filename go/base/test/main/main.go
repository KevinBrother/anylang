package main

import (
	// "errors"
	"base_test/concurrency"
	"fmt"
	"log"
	"time"

	"github.com/pkg/errors"
)

func HasError() error {
	log.Println("first fn")

	err := errors.New("error")
	log.Println(err)

	// wrapError := fmt.Errorf("包装错误 %w", err)
	wrapError := errors.Wrap(err, "包装错误")
	// log.Println(wrapError)

	log.Println("second fn")

	return wrapError
}

func TestGoroutines() {
	for i := 0; i < 10; i++ {

		go func() {
			fmt.Println(i)
		}()
	}

	time.Sleep(time.Second * 50)
}

func main() {
	TestGoroutines()

	if err := HasError(); err != nil {
		fmt.Printf("%+v\n", err)
	}

}
