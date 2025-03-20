// 小明所在的学校有一个时钟（主题），每到整点时，它就会通知所有的学生（观察者）当前的时间，请你使用观察者模式实现这个时钟通知系统。

// 注意点：时间从 0 开始，并每隔一个小时更新一次

package behavioral

import "fmt"

type IObserver interface {
	Update(clock int)
}

type Subject struct {
	Clock     int
	Observers []IObserver
}

func (s *Subject) Add(o IObserver) {
	s.Observers = append(s.Observers, o)
}

func (s *Subject) Notify() {
	s.Clock += 1
	for _, ob := range s.Observers {
		ob.Update(s.Clock)
	}
}

type Observer struct {
	Name string
}

func (o *Observer) Update(clock int) {
	fmt.Println(o.Name, " ", clock)
}
