package myutils

func Change(a *int, b *int) {
	tmp := *a
	*a = *b
	*b = tmp
}
