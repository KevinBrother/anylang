package io

import (
	"fmt"
	"io"
	"testing"
)

func TestPipe(t *testing.T) {
	pr, pw := io.Pipe()

	go func() {
		str := "hello world"
		n, err := pw.Write([]byte(str))
		if err != nil {
			fmt.Println("error: pw write ", err)
		}

		fmt.Printf("写入的字节数 %d , 字符串为. %s", n, str)
	}()

	buf := make([]byte, 12)

	n, err := pr.Read(buf)

	if err != nil {
		fmt.Println("error: pr Read ", err)
	}
	fmt.Printf("读到的字节数 %d ,pw is closed. %s", n, buf[:n])
}
