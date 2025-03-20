package main

import (
	"design-pattern/behavioral"
	"testing"
)

func TestObserver(t *testing.T) {
	sub := behavioral.Subject{Clock: 0, Observers: make([]behavioral.IObserver, 0)}

	// var o1 = behavioral.Observer{Name: "Alice"}
	o1 := behavioral.Observer{Name: "Alice"}
	var o2 = &behavioral.Observer{Name: "Bob"}

	sub.Add(&o1)
	sub.Add(o2)

	sub.Notify()
	sub.Notify()
	sub.Notify()

}
