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
			// defer mu.Unlock() // 资源泄漏：锁资源被永久占用，导致其他线程无法继续执行。
			c++
		}()
	}

	if err := http.ListenAndServe("localhost:6060", nil); err != nil {
		panic(err)
	}
}
