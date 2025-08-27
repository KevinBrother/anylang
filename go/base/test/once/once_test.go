package once

import (
	"sync"
	"testing"
	"time"
)

func TestOnce(t *testing.T) {
	var once sync.Once
	ch := make(chan struct{})
	go func() {
		once.Do(func() {
			close(ch)
		})
	}()
	go func() {
		once.Do(func() {
			close(ch)
		})
	}()
	select {
	case <-ch:
		time.Sleep(time.Second)
		t.Log("first close")
	case <-time.After(time.Second):
		t.Fatal("timeout")
	}

}
