package main

import (
	// "errors"
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
	if err := HasError(); err != nil {
		fmt.Printf("%+v\n", err)
	}
}
