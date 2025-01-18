package error

import (
	// "errors"

	"fmt"
	"log"
	"testing"

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

func TestError(t *testing.T) {
	defer func() {
		if err := recover(); err != nil {
			fmt.Println("监测到错误，不会退出程序")
		}
	}()

	err := HasError()
	if err != nil {
		// fmt.Printf("错误: %+v\n", err) // %+v 打印堆栈信息

		panic(err)
	}
}
