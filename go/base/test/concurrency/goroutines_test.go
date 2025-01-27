package concurrency

import (
	"fmt"
	"testing"
	"time"
)

func TestDs(t *testing.T) {
	ch := make(chan int)
	go Generate(ch)

	for i := 0; i < 10; i++ {
		fmt.Printf("chan is : %v", ch)
		prime := <-ch
		fmt.Println("prime:, ", prime)
		ch1 := make(chan int)
		go Filter(ch, ch1, prime)
		ch = ch1
	}
}

func genData(ch chan<- int, t time.Duration) {
	for i := 0; i < 10; i++ {
		time.Sleep(t)
		ch <- i
	}
}

func TestSelect(t *testing.T) {

	ch1 := make(chan int)
	ch2 := make(chan int)

	go genData(ch1, time.Second*1)
	go genData(ch2, time.Second*2)

	for i := 0; i < 10; i++ {
		select {
		case data := <-ch1:
			fmt.Println("ch1 data", data)
		case data := <-ch2:
			fmt.Println("ch2 data", data)
		case <-time.After(time.Second * 20):
			fmt.Println("err: time out")
		}
	}
}

func TestWait(t *testing.T) {

	done := make(chan struct{})
	go func() {
		time.Sleep(time.Second * 2)
		fmt.Println("done")
		// 发送取消信号
		done <- struct{}{}
	}()
	fmt.Println("main wait goroutine")
	// 等待结束信号,如果使用了 通道中的数据，则 main 函数会等待，并阻塞后面代码的执行
	<-done
	fmt.Println("main done")
}

func TestWait2(t *testing.T) {
	done := make(chan struct{})

	ch := make(chan int, 3)

	go func() {
		time.Sleep(time.Second * 2)
		defer func() {
			fmt.Println("close ch")
			close(ch)
		}()

		// 发送取消信号
		for i := 0; i < 5; i++ {
			ch <- i
			fmt.Printf("[%d] write to ch: %d \n", time.Now().Unix(), i)
		}
	}()

	go func() {
		for {
			time.Sleep(time.Second * 3)
			fmt.Println("wait data")
			data, ok := <-ch
			if !ok {
				break
			}
			fmt.Printf("[%d] get from ch: %d ,  ok: %t\n", time.Now().Unix(), data, ok)
		}

		fmt.Println("ready out")
		done <- struct{}{}
	}()

	fmt.Println("main wait goroutine")
	<-done
	fmt.Println("main done")
}

func TestWait3(t *testing.T) {
	done := make(chan struct{})
	// 定义一个缓冲数量为 2 的 chan
	ch := make(chan int, 2)

	go func() {
		// 在循环结束之后关闭 chan
		defer close(ch)
		for i := 0; i < 3; i++ {
			// 在写入 2 个数之后，会陷入阻塞状态
			// 直到上面那个协程从 ch 读取出数据，ch 才会有空余的地方可以继续接收数据
			ch <- i
			fmt.Printf("[%d] write to ch: %d\n", time.Now().Unix(), i)
		}
	}()

	go func() {
		for {
			// 模拟比较慢的处理速度
			time.Sleep(time.Second)

			i, ok := <-ch
			// ok 为 false 表示 ch 已经关闭并且数据已经被读取完
			// 这个时候中断循环
			if !ok {
				break
			}

			fmt.Printf("[%d] get from ch: %d\n", time.Now().Unix(), i)
		}
		// 处理完数据之后，发送结束的信号
		done <- struct{}{}
	}()
	// 收到结束信号，解除阻塞状态，继续往下执行
	<-done
}
