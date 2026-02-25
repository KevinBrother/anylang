import unittest
from src import utils

class TestAdd(unittest.TestCase):
    def test_add(self):
        self.assertEqual(utils.add(2, 4), 6, "Should be 6")
        self.assertEqual(utils.add(2, 3), 5, "Should be 5")
        self.assertEqual(utils.add(-1, 1), 0)

if __name__ == '__main__':
    unittest.main()