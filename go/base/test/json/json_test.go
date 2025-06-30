package json_test

import (
	"fmt"
	"testing"
)

type Movie struct {
	Id     int
	Title  string
	Year   int  `json:"released"`
	Color  bool `json:"color,omitempty"`
	Actors []string
}

var Movies = []Movie{
	{Title: "Casablanca", Year: 1942, Color: false,
		Actors: []string{"Humphrey Bogart", "Ingrid Bergman"}},
	{Title: "Cool Hand Luke", Year: 1967, Color: true,
		Actors: []string{"Paul Newman"}},
	{Title: "Bullitt", Year: 1968, Color: true,
		Actors: []string{"Steve McQueen", "Jacqueline Bisset"}},
}

// 修复 json 的定义，应该是字符串类型
var jsonString = `
[
	{
	  "Title": "Casablanca",
	  "released": 1942,
	  "Actors": [
		"Humphrey Bogart",
		"Ingrid Bergman"
	  ]
	},
	{
	  "Title": "Cool Hand Luke",
	  "released": 1967,
	  "color": true,
	  "Actors": [
		"Paul Newman"
	  ]
	},
	{
	  "Title": "Bullitt",
	  "released": 1968,
	  "color": true,
	  "Actors": [
		"Steve McQueen",
		"Jacqueline Bisset"
	  ]
	}
]
`

func TestMarshal(t *testing.T) {
	data := Marshal(Movies)
	fmt.Printf("%s\n", data)
}

func TestUnMarshal(t *testing.T) {
	var movies []Movie
	err := Unmarshal([]byte(jsonString), &movies)
	if err != nil {
		t.Errorf("Unmarshal failed: %v", err)
	}
	fmt.Printf("%+v\n", movies)
}
