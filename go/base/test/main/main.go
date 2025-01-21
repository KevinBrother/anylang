package main

import (
	// "errors"
	"base_test/concurrency"
	"fmt"
	"log"

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

func main() {
	// if err := HasError(); err != nil {
	// 	fmt.Printf("%+v\n", err)
	// }

	ch := make(chan int)
	go concurrency.Generate(ch)

	for i := 0; i < 10; i++ {
		fmt.Printf("chan is : %v", ch)
		prime := <-ch
		fmt.Println("prime:, ", prime)
		ch1 := make(chan int)
		go concurrency.Filter(ch, ch1, prime)
		ch = ch1
	}

}
