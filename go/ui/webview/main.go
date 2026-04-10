package main

import webview "github.com/webview/webview_go"

func main() {
	// 创建一个 debug 模式的窗口
	w := webview.New(true)
	defer w.Destroy()

	w.SetTitle("Go WebView Demo")
	w.SetSize(800, 600, webview.HintNone)

	// 绑定一个 Go 函数给前端调用
	w.Bind("add", func(a, b int) int {
		return a + b
	})

	// 直接加载 HTML 内容，而不只是 URL
	w.Navigate("data:text/html,<html><body><h1>Go + WebView</h1><button onclick='callGo()'>this is button</button><script>async function callGo(){ const res = await add(1, 2); alert(res); }</script></body></html>")

	w.Run()
}
