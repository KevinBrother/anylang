import unittest

class TestAdd(unittest.TestCase):
    def test_add(self):
        # self.assertEqual(2 + 3, 6, "Should be 5")
        self.assertEqual(2 + 3, 5, "Should be 5")
        self.assertEqual(-1 + 1, 0)

if __name__ == '__main__':
    unittest.main()