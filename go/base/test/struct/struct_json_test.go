package test

import (
	"encoding/json"
	"fmt"
	"testing"
)

type Students struct {
	ID     int
	Gender string
	Name   string
}

type Class struct {
	Title    string
	Students []*Students
}

// JSON 序列化
func TestJsonSerialization(t *testing.T) {
	c := Class{
		Title:    "一年级一班",
		Students: make([]*Students, 0, 200),
	}

	s := Students{
		ID:     01,
		Gender: "boy",
		Name:   "first",
	}

	c.Students = append(c.Students, &s)

	for i := 0; i < 5; i++ {
		gender := "男"

		if i%2 == 0 {
			gender = "女"
		}

		c.Students = append(c.Students, &Students{
			ID:     i,
			Gender: gender,
			Name:   fmt.Sprintf("stu-%d", i),
		})
	}

	fmt.Println(c)
	fmt.Printf("c: %v \n", c)

	// JSON 序列化 结构体 转为 json 字符串
	data, err := json.Marshal(c)
	if err != nil {
		println("json marshal failed")
		return
	}

	fmt.Println(data)
	fmt.Printf("data: %s\n", data)

	// JSON 反序列化 JSON字符串 转为 结构体

}

func TestJsonUNserialization(t *testing.T) {
	str := `{"Title":"一年级一班","Students":[{"ID":1,"Gender":"boy","Name":"first"},{"ID":0,"Gender":"女","Name":"stu-0"},{"ID":1,"Gender":"男","Name":"stu-1"},{"ID":2,"Gender":"女","Name":"stu-2"},{"ID":3,"Gender":"男","Name":"stu-3"},{"ID":4,"Gender":"女","Name":"stu-4"}]}`

	c := &Class{}
	err := json.Unmarshal([]byte(str), c)
	if err != nil {
		fmt.Println("json Unmarshal failed", err)
		return
	}

	fmt.Printf("c: %v\n", c)
}
