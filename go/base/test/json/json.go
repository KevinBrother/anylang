package json_test

import (
	"encoding/json"
	"log"
)

// json 序列化
func Marshal(jsonStruct interface{}) []byte {
	data, err := json.MarshalIndent(jsonStruct, "", "  ")
	if err != nil {
		log.Fatalf("JSON marshaling failed: %s", err)
	}
	return data
}

// 反序列化到某个struct 中
func Unmarshal(data []byte, v interface{}) error {
	err := json.Unmarshal(data, v)
	if err != nil {
		log.Printf("JSON unmarshaling failed: %s", err)
		return err
	}
	return nil
}
