package test

import "testing"

func TestCondition(t *testing.T) {

	for i := 1; i < 8; i++ {
		switch j := i * 2; j > 5 {
		case j == 6, j == 7:
			t.Log("j is 6 and 7: ", j)
		case j == 8, j == 9:
			t.Log("j is 8 and 9: ", j)
		default:
			t.Log("not 6.7.8.9: ", j)
		}
	}
}
