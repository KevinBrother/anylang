# def add(a, b):
#     """Returns the sum of a and b."""
#     return a + b

from utils.add import add  # 此时 add 是"函数"，调用方式: add(1, 2)
# from utils import add          # 此时 add 是"模块"，调用方式: add.add(1, 2)

def exec_main():
    print("Hello from uv-test exec!")
    print(add(1, 2))

if __name__ == "__main__":
    exec_main() 