package main

import (
	"io"
	"log"
	"net"
	"os"
)

// go run clockWall.go NewYork=localhost:8010 Tokyo=localhost:8020 London=localhost:8030
func main() {
	// ip+port 的数组
	ports := os.Args[1:]
	// 循环遍历数组，连接到每个ip+port
	for _, port := range ports {
		conn, err := net.Dial("tcp", "localhost:"+port)
		if err != nil {
			log.Fatal(err)
		}
		defer conn.Close()
		// 循环读取标准输入，并将其发送到每个ip+port
		log.Println("Connected to localhost:", port)
		go mustCopy(conn, os.Stdin)
	}
	// 连接到第一个ip+port，并将其输出到标准输出

	for {

	}
}

func mustCopy(dst io.Writer, src io.Reader) {
	if _, err := io.Copy(dst, src); err != nil {
		log.Fatal(err)
	}
}
