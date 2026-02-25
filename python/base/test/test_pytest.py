import pytest
import sys
print(sys.path)
from  src import utils


def test_add():
    assert utils.add(2, 3) == 5
    assert utils.add(-1, 1) == 0
    