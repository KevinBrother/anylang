package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	c := make(chan string)

	go func(c chan string) {
		var port = "8081"

		http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
			fmt.Fprintf(w, "hello, %q", r.URL.Path)
		})

		http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
			fmt.Fprintf(w, "Hello, World! %q", r.URL.Path)
		})

		// 获取 get请求的参数
		http.HandleFunc("/getParams", func(w http.ResponseWriter, r *http.Request) {
			name := r.URL.Query().Get("name")
			fmt.Fprintf(w, "name: ", name)
		})

		http.HandleFunc("/stop", func(w http.ResponseWriter, r *http.Request) {
			os.Exit(0)
		})

		serverUrl := "http://localhost:" + port
		c <- serverUrl
		if err := http.ListenAndServe(":"+port, nil); err != nil {
			fmt.Println("Error starting server:", err)
		}

	}(c)

	serverUrl := <-c
	fmt.Println("Server started at", serverUrl)

	select {} // Block forever
}
