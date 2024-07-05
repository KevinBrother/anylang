package main

import (
	"io"
	"log"
	"net"
	"time"
)

func main() {
	// go run clock.go 8001 Eastern
	// go run clock.go 8012 London
	// go run clock.go 8013 NewYork

	ips := []string{"localhost:8001", "localhost:8012", "localhost:8013"}

	for _, ip := range ips {

		listener, err := net.Listen("tcp", ip)
		log.Print("listening on " + ip)
		if err != nil {
			log.Fatal(err)
		}

		go func() {
			for {
				conn, err := listener.Accept()
				if err != nil {
					log.Print(err) // e.g., connection aborted
					continue
				}
				log.Printf("main new connection from %s", conn.RemoteAddr())
				handleConn(conn) // handle one connection at a time
			}
		}()

	}

	for {

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
