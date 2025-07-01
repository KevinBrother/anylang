package dto

import (
	json_test "base_test/json"
	"testing"
	"time"
)

func TestCreate(t *testing.T) {

	oUser := CreateUserDTO{
		Name: "张三",
		Age:  18,
	}

	user := Create(oUser)
	jsonUser := json_test.Marshal(user)

	t.Logf("user: %+v", user)
	t.Logf("jsonUser: %s", jsonUser)
}
func TestCreate2(t *testing.T) {
	userJson := `{
		"name": "李四",
		"age": 19

	}`
	oUser := CreateUserDTO{}
	err := json_test.Unmarshal([]byte(userJson), &oUser)
	if err != nil {
		t.Fatalf("JSON解析失败 %v", err)
	}

	user := Create(oUser)

	t.Logf("user: %+v", user)
}

func TestGetUsers(t *testing.T) {
	// 假设从数据库获取到 User
	po := User{
		Id:         1,
		Name:       "张三",
		Age:        20,
		UpdateTime: time.Now(),
		CreateTime: time.Now().Add(-24 * time.Hour),
	}

	vo := GetUsers(po)
	t.Logf("userVO: %+v", vo)
}

func TestUpdate(t *testing.T) {
	uDTO := UpdateUserDTO{
		Id:   1,
		Name: "张三",
		Age:  18,
	}

	po := Update(uDTO)
	t.Logf("userPO: %+v", po)
}
