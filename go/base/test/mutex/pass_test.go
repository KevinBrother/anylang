package mutex

import (
	"fmt"
	"sync"
	"testing"
	"time"
)

func TestPass(t *testing.T) {
	var rwmu sync.RWMutex
	var wg sync.WaitGroup

	// 1. 第一个 goroutine 持有读锁（不释放）
	wg.Add(1)
	go func() {
		defer func() {
			rwmu.RUnlock()
			wg.Done()
		}()
		rwmu.RLock()
		fmt.Println("G1: 获取读锁（不释放）")
		time.Sleep(5 * time.Second) // 长时间持有读锁
		// 注意：这里故意不释放读锁，模拟未释放场景
	}()

	// 等待 G4 进入写锁等待队列

	// 3. 第三个 goroutine 尝试获取新的读锁（会阻塞）
	wg.Add(1)
	go func() {
		defer wg.Done()
		time.Sleep(100 * time.Millisecond)
		fmt.Println("G3: 尝试获取新的读锁...")
		rwmu.RLock() // 阻塞，等待 G4 的写锁完成
		fmt.Println("G3: 成功获取读锁")
		rwmu.RUnlock()
		fmt.Println("G3: 释放读锁")
	}()

	// 2. 第二个 goroutine 尝试获取写锁（会阻塞）
	wg.Add(1)
	go func() {
		defer wg.Done()
		time.Sleep(50 * time.Millisecond)
		fmt.Println("G4: 尝试获取写锁...")
		rwmu.Lock() // 阻塞，等待 G1 释放读锁
		fmt.Println("G4: 成功获取写锁")
		rwmu.Unlock()
		fmt.Println("G4: 释放写锁")
	}()

	wg.Wait()
}
