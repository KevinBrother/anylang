#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> v = {6};
    vector<int> v2(10, 42);
//    vector<int> v3;
//    v3 = {1, 2, 3, 4, 5};

    // 增
    v.push_back(7);
    v.insert(v.begin() , 0);
    v.insert(v.begin() + 1, 1);
    v.insert(v.end() - 1, -7);
    v.insert(v.end(), 8);
    v.insert(v.end(), 9);
    v.insert(v.end(), 10);
    // 删
    v.erase(v.begin() + 1);
    v.erase(v.begin() + 1, v.end());
    // 改
    v[0] = 100;
    v[1] = 200;
    v[2] = 300;
    // 查
    cout << "The first element (front) is: " << v.front() << endl;
    cout << "The element at index 2 is: " << v[2] << endl;
    cout << "The last element is: " << v.back() << endl;
    // 遍历
    for (int i = 0; i < v.size(); i++) {
        cout << v[i] << " ";
    }

    // 其他操作
    // 交换
    v.swap(v2);

    // 容量
    v.reserve(10);

    // 缩减
    v.shrink_to_fit();

//    // 清空
//    v.clear();

    // 排序
    sort(v.begin(), v.end());

    // 反转
    reverse(v.begin(), v.end());

    // 合并
    vector<int> v3 = {4, 5, 6};
    v.insert(v.end(), v3.begin(), v3.end());

    cout << "Size of vector: " << v.size() << endl;

    return 0;
}