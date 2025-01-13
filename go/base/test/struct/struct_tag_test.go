package test

import (
	"encoding/json"
	"fmt"
	"testing"
)

type tagStudent struct {
	ID     int `json:"id"`
	Gender string
	Name   string
}

// JSON 序列化
func TestStructTag(t *testing.T) {

	s := tagStudent{
		ID:     01,
		Gender: "boy",
		Name:   "first",
	}

	// JSON 序列化 结构体 转为 json 字符串
	data, err := json.Marshal(s)
	if err != nil {
		println("json marshal failed")
		return
	}

	fmt.Println(data)
	fmt.Printf("s: %s\n", data)
}

func TestStructTag2(t *testing.T) {

	s := `{"id":1,"Gender":"boy","Name":"first"}`

	ts := &tagStudent{}
	// JSON 序列化 结构体 转为 json 字符串
	err := json.Unmarshal([]byte(s), ts)

	if err != nil {
		fmt.Println("err: ", err)
		fmt.Printf("json marshal failed: %v\n", err)
		return
	}

	fmt.Println(s)
	fmt.Println(ts)
	fmt.Printf("s: %v\n", ts)
}
