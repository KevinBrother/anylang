package main

import (
	"fmt"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/widget"
)

func main() {
	a := app.New()
	w := a.NewWindow("Go Native UI Demo")
	w.Resize(fyne.NewSize(400, 300))

	label := widget.NewLabel("Hello, Native UI!")
	count := 0

	btn := widget.NewButton("Click me", func() {
		count++
		label.SetText(fmt.Sprintf("Clicked %d times", count))
	})

	input := widget.NewEntry()
	input.SetPlaceHolder("Type something...")

	greetBtn := widget.NewButton("Greet", func() {
		if input.Text != "" {
			label.SetText(fmt.Sprintf("Hello, %s!", input.Text))
		}
	})

	w.SetContent(container.NewVBox(
		label,
		btn,
		input,
		greetBtn,
	))

	w.ShowAndRun()
}
