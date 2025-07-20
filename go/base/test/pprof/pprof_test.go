package pprof

import (
	"net/http"
	_ "net/http/pprof"
	"sync"
	"testing"
)

func TestPPROF(t *testing.T) {
	var mu sync.Mutex
	c := 0

	for i := 0; i < 100; i++ {
		go func() {
			mu.Lock()
			// defer mu.Unlock() //
			c++
		}()
	}

	if err := http.ListenAndServe("localhost:6060", nil); err != nil {
		panic(err)
	}
}
