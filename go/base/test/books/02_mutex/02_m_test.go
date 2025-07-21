package mutex

import (
	"net/http"
	_ "net/http/pprof"
	"sync"
	"sync/atomic"
	"testing"
)

func TestCAS(t *testing.T) {

	var a int64 = 12

	atomic.CompareAndSwapInt64(&a, 12, 3)
}

func TestDeadLock(t *testing.T) {
	var mu sync.Mutex
	c := 0

	for i := 0; i < 100; i++ {
		go func() {
			mu.Lock()
			defer mu.Unlock()
			c++
		}()
	}

	if err := http.ListenAndServe("0.0.0.0:8080", nil); err != nil {
		panic(err)
	}
}
