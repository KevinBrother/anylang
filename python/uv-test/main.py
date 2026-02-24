from utils.add import add
from exec import exec

def main():
    print("Hello from uv-test!")
    print(add(1, 2))
    exec.exec_main()
    print(exec.add.add(3, 4))

if __name__ == "__main__":
    main()
