from utils.add import add
from exec import add as exec_add
import exec.exec as exec_module

def main():
    print("Hello from uv-test!")
    print(add(1, 2))
    exec_module.exec_main()
    print(exec_add.add(3, 4))

if __name__ == "__main__":
    main()
