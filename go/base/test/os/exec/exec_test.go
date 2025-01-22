package exec

import (
	"fmt"
	"os"
	"os/exec"
	"sync"
	"testing"
)

const (
	filename = "input.txt"
	abc      = "abc"
)

func TestLookPath(t *testing.T) {
	// file := "/usr/local/bin/node"
	file := "python"
	path, err := exec.LookPath(file)

	if err != nil {
		fmt.Printf("having`t %s, please install first", file)
	}

	fmt.Printf("%s path: is %s ", file, path)
}

func TestCommand(t *testing.T) {
	file, err := os.OpenFile(filename, os.O_RDWR|os.O_CREATE|os.O_SYNC, 0644)
	if err != nil {
		fmt.Println("error: ", err, abc)
		return
	}
	defer file.Close()

	file.Write([]byte(`
	hello world
	`))

	cmd := exec.Command("node", "-v")
	// cmd.Stdout = os.Stdout
	cmd.Stdout = file
	str := fmt.Sprintf("pid: %d\n", cmd.Process)
	file.Write([]byte(str))
	cmd.Run()
}

func TestStart(t *testing.T) {

	commands := []*exec.Cmd{
		exec.Command("sleep", "3"),
		exec.Command("sleep", "5"),
		exec.Command("sleep", "2"),
	}

	var wg sync.WaitGroup

	wg.Add(len(commands))

	for _, cmd := range commands {
		go func() {
			defer wg.Done()
			err := cmd.Start()

			if err != nil {
				fmt.Println("error starting command: ", err)
				return
			}

			fmt.Println("Command started, PID: ", cmd.Process.Pid)

			err = cmd.Wait()

			if err != nil {
				fmt.Println("error waiting for command: ", err)
				return
			}
			fmt.Println("command finished, PID: ", cmd.Process.Pid)

		}()
	}

	wg.Wait()
	fmt.Println("All commands finished.")
}
