package context

import (
	"context"
	"fmt"
	"sync"
	"testing"
	"time"
)

func TestContext(t *testing.T) {
	ctx := context.Background()
	KEY := "name"
	VAL := "张三"
	ctx = context.WithValue(ctx, KEY, VAL)

	ctx.Value(KEY)

	t.Logf("%+v", ctx)

	ctx = context.TODO()

}

// 超时控制
func TestTimeout(t *testing.T) {
	ctx := context.Background()
	// 创建带有 3 秒超时的新上下文
	ctx, cancel := context.WithTimeout(ctx, 2*time.Second)

	defer cancel()

	ch := make(chan string)

	// 模拟异步
	go func() {
		time.Sleep(3 * time.Second)
		ch <- "操作完成"
	}()

	select {
	case result := <-ch:
		fmt.Println("result: ", result)
	case <-ctx.Done():
		fmt.Println("done", ctx.Err())
	case <-time.After(4 * time.Second):
		fmt.Println("超时了")
	}

	fmt.Println("after", ctx)
}

// 多级协程级取消
func TestMultiProcess(t *testing.T) {
	ctx := context.Background()
	ctx, cancel := context.WithTimeout(ctx, 3*time.Second)

	defer cancel()

	var wg sync.WaitGroup

	for i := 0; i < 3; i++ {
		wg.Add(1)

		go func(i int) {
			defer wg.Done()
			processTask(ctx, i)
		}(i)
	}

	wg.Wait()
}

func processTask(ctx context.Context, id int) {

	done := make(chan struct{})

	go func() {
		time.Sleep(2 * time.Second)
		fmt.Printf("流程 %d 已经完成\n", id)
		close(done)
	}()

	select {
	case <-ctx.Done():
		fmt.Printf("任务 %d 已经被取消： %v\n", id, ctx.Err())
		return
	case <-done:

	}
}

// 截止时间控制 确保操作在指定时间点前完成（如秒杀活动）。
func TestStopByDeadline(t *testing.T) {
	deadline := time.Now().Add(3 * time.Second)
	ctx := context.Background()

	ctx, cancel := context.WithDeadline(ctx, deadline)

	defer cancel()

	go performCriticalTask(ctx)

	// time.Sleep(4 * time.Second)

	timer := time.NewTimer(4 * time.Second)
	<-timer.C
}

func performCriticalTask(ctx context.Context) {
	for {
		select {
		case rst := <-ctx.Done():
			fmt.Printf("ctx done val: %v\n", rst)
			if ctx.Err() == context.DeadlineExceeded {
				fmt.Println("时间差不多喽！")
			} else {
				fmt.Println("任务被取消", ctx.Err())
			}
		default:
			fmt.Println("处理中。。。")
			time.Sleep(time.Second)
		}
	}
}
