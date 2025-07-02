package dto

import (
	"time"
)

type baseDTO struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
}

type baseVO struct {
	Id         int       `json:"id"`
	UpdateTime time.Time `json:"update_time"`
	CreateTime time.Time `json:"create_time"`
}

// PO Persistent Object， 和数据库字段一一对应
type TUser struct {
	baseVO
	baseDTO
}

// DTO 数据传输对象，用于接口数据传输，分为创建和更新两种场景
// DTO from request to add
type CreateTUserDTO struct {
	baseDTO
}

// DTO from request for update
type UpdateTUserDTO struct {
	Id int `json:"id"`
	baseDTO
}

// VO view Object VO 用于返回给前端的视图数据：
type TUserVO struct {
	baseDTO
	baseVO
}
