package dto

import (
	"time"
)

// PO Persistent Object， 和数据库字段一一对应
type User struct {
	Id         int       `json:"id"`
	Name       string    `json:"name"`
	Age        int       `json:"age"`
	UpdateTime time.Time `json:"update_time"`
	CreateTime time.Time `json:"create_time"`
}

// DTO 数据传输对象，用于接口数据传输，分为创建和更新两种场景
// DTO from request to add
type CreateUserDTO struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
}

// DTO from request for update
type UpdateUserDTO struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
	Age  int    `json:"age"`
}

// VO view Object VO 用于返回给前端的视图数据：
type UserVO struct {
	Id         int       `json:"id"`
	Name       string    `json:"name"`
	Age        int       `json:"age"`
	UpdateTime time.Time `json:"update_time"`
	CreateTime time.Time `json:"create_time"`
}

// CreateUserDTO => User
func (dto CreateUserDTO) ToUser() User {
	now := time.Now()
	return User{
		Name:       dto.Name,
		Age:        dto.Age,
		CreateTime: now,
		UpdateTime: now,
	}
}

// UpdateUserDTO => User
func (dto UpdateUserDTO) ToUser() User {
	now := time.Now()
	return User{
		Id:         dto.Id,
		Name:       dto.Name,
		Age:        dto.Age,
		UpdateTime: now,
	}
}

// User => UserVO
func (u User) ToUserVO() UserVO {
	return UserVO{
		Id:         u.Id,
		Name:       u.Name,
		Age:        u.Age,
		UpdateTime: u.UpdateTime,
		CreateTime: u.CreateTime,
	}
}

func Create(user CreateUserDTO) User {
	po := user.ToUser()
	return po
}

func Update(user UpdateUserDTO) User {
	po := user.ToUser()
	return po
}

func GetUsers(po User) UserVO {
	vo := po.ToUserVO()
	return vo
}
