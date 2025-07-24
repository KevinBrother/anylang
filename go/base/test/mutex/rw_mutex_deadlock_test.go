package mutex

import (
	"fmt"
	"sync"
	"testing"
	"time"

	sync2 "github.com/sasha-s/go-deadlock"
)

func TestRWMutex(t *testing.T) {
	var rwmu sync.RWMutex
	data := 0

	// 启动一个 goroutine 持有读锁并尝试获取写锁
	go func() {
		rwmu.RLock()         // 获取读锁
		defer rwmu.RUnlock() // 理论上释放读锁，但实际执行不到

		// 尝试在持有读锁时获取写锁（死锁点）
		rwmu.Lock()
		data++
		rwmu.Unlock()
	}()

	// 等待 goroutine 启动
	time.Sleep(100 * time.Millisecond)

	// 主线程尝试获取写锁（会阻塞，但不是死锁的直接原因）
	rwmu.Lock()
	defer rwmu.Unlock()
	data++
}

func TestRWMutex2(t *testing.T) {
	var rwmu sync.RWMutex
	data := 0

	// 持有写锁时尝试获取读锁
	go func() {
		rwmu.Lock()         // 获取写锁
		defer rwmu.Unlock() // 理论上释放写锁，但执行不到

		// 尝试在持有写锁时获取读锁（死锁点）
		rwmu.RLock()
		defer rwmu.RUnlock()
		data++
	}()

	// 主线程等待（确保子 goroutine 先执行）
	select {} // 阻塞主线程，避免程序退出
}

// 如果先调用了读锁，但是没有释放，这时候调用写锁（拿不到写锁），此时再调用读锁，能拿到读锁吗?
func TestRWMutex3(t *testing.T) {
	var rwmu sync2.RWMutex

	// 持有写锁时尝试获取读锁
	go func() {
		rwmu.RLock()
		{
			time.Sleep(10 * time.Second)
			rwmu.RLock()
			fmt.Println("inner")
			rwmu.RUnlock()
		}
		rwmu.RUnlock()

	}()

	time.Sleep(2 * time.Second)
	rwmu.Lock()
	fmt.Println("outer")
	rwmu.Unlock()
}
