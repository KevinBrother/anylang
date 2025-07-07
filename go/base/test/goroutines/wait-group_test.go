package goroutines

import (
	"fmt"
	"sync"
	"testing"
	"time"
)

func a(wg *sync.WaitGroup) {
	defer func() {
		wg.Done()
		fmt.Printf("after a done: %+v\n", wg)
	}()

	for i := 0; i < 100; i++ {
		fmt.Println("a", i)
	}

}
func b(wg *sync.WaitGroup) {
	defer func() {
		wg.Done()
		fmt.Printf("after b done: %+v\n", wg)
	}()

	for i := 0; i < 100; i++ {
		fmt.Println("b", i)
	}
}

func TestCentralizedPreallocation(t *testing.T) {
	var wg sync.WaitGroup
	// runtime.GOMAXPROCS(1)
	fmt.Printf("before add: %+v\n", wg)

	// 集中式 Add：提前确定所有需要等待的任务数量
	wg.Add(2)

	go a(&wg)
	go b(&wg)

	fmt.Printf("after all add: %+v\n", wg)

	// 增加休眠，确保goroutine执行
	time.Sleep(100 * time.Millisecond)

	wg.Wait()

	fmt.Printf("after all done: %+v\n", wg)
}

func TestDynamic(t *testing.T) {

	tasks := make(chan func(p int), 10)
	maxProcess := 3
	// var wg sync.WaitGroup
	wg := sync.WaitGroup{}
	wg.Add(maxProcess)

	for i := 0; i < maxProcess; i++ {
		go func() {
			defer wg.Done() // 通道已被关闭（close(tasks)）且  通道缓冲区中没有剩余元素
			for task := range tasks {
				task(i)
			}
		}()
	}

	for i := 0; i < 1000; i++ {
		task := func(i int) func(p int) {
			return func(p int) {
				fmt.Printf("在协程：%d 中处理任务 %d\n", p, i)
			}
		}(i)

		tasks <- task
	}

	close(tasks)
	wg.Wait()
}

type TreeNode struct {
	left  *TreeNode
	right *TreeNode
	val   int
}

func processTree(node *TreeNode, wg *sync.WaitGroup, ch chan<- int) {
	defer wg.Done() // 关闭节点的调用
	if node == nil {
		return
	}

	fmt.Println("val:", node.val)
	ch <- node.val

	if node.left != nil {
		wg.Add(1)
		go processTree(node.left, wg, ch)
	}
	if node.right != nil {
		wg.Add(1)
		go processTree(node.right, wg, ch)
	}
}

func TestRecursion(t *testing.T) {
	ch := make(chan int)
	wg := sync.WaitGroup{}
	node := TreeNode{
		val: 1,
		left: &TreeNode{
			val: 2,
		},
		right: &TreeNode{
			val: 3,
			left: &TreeNode{
				val: 10,
			},
		},
	}

	wg.Add(1)
	go processTree(&node, &wg, ch)

	go func() {
		wg.Wait()
		close(ch)
	}()

	// // 下面的会阻塞主流程消费，从而导致死锁。
	// wg.Wait()
	// close(ch)

	sum := 0
	for num := range ch {
		sum += num
	}

	fmt.Println("sum: ", sum)
}
