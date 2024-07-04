package main

import (
	"fmt"
	"io"
	"log"
	"net"
	"os"
	"time"
)

func main() {
	// go run clock.go 8001 Eastern
	// go run clock.go 8012 London
	// go run clock.go 8013 NewYork

	// 获取命令行参数
	args := os.Args

	// 打印命令行参数
	fmt.Println("命令行参数:")
	for i, arg := range args {
		fmt.Printf("参数%d: %s\n", i, arg)
	}

	// 获取端口号
	port := "8000"
	if len(args) > 1 {
		port = args[1]
	}

	// 获取时区
	tz := "Local"
	if len(args) > 2 {
		tz = args[2]
	}
	// 设置端口与时区的map对象 {local: 8080, Eastern: 8010}
	portMap := map[string]string{}

	// 往 portMap 中添加时区与端口的映射关系
	portMap[tz] = port

	listener, err := net.Listen("tcp", "localhost:"+port)
	log.Print("listening on http://localhost:" + port)
	if err != nil {
		log.Fatal(err)
	}

	for {
		conn, err := listener.Accept()
		if err != nil {
			log.Print(err) // e.g., connection aborted
			continue
		}
		log.Printf("main new connection from %s", conn.RemoteAddr())
		go handleConn(conn) // handle one connection at a time
	}
}

func handleConn(c net.Conn) {
	log.Printf("handleConn new connection from %s", c.RemoteAddr())
	defer c.Close()
	for {
		_, err := io.WriteString(c, time.Now().Format("15:04:05\n"))
		if err != nil {
			return // e.g., client disconnected
		}
		time.Sleep(1 * time.Second)
	}
}
