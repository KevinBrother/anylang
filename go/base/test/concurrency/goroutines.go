package concurrency

func Generate(ch chan<- int) {
	for i := 2; ; i++ {
		ch <- i
	}
}

// out 是一个通道，只能往它里发送数据，只发送(写)通道 (chan<-)
// in 是一个通道，只能从它里接受数据 ，只接收(读)通道 (<-chan)
func Filter(in <-chan int, out chan<- int, prime int) {
	for {
		i := <-in

		if i%prime != 0 {
			out <- i
		}

	}
}
