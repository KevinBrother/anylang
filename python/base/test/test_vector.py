import pytest
import src.vector as vector

def test_vector_abs():
    v = vector.Vector(3, 4)
    print('v: ', v)
    assert v.__abs__() == 5.0
    assert abs(v) == 5.0 # abs() 函数会调用对象的（魔法函数） __abs__() 方法

