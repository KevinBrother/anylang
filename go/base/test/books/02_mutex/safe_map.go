package mutex

import "sync"

type SafeMap[k comparable, v any] struct {
	sync.Mutex
	m map[k]v
}

func (m *SafeMap[k, v]) Get() {

}

func (m *SafeMap[k, v]) Set() {

}
