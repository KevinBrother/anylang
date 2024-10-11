# 设计模式案例实现

## 参考文档

- [卡码网设计模式精讲](https://github.com/youngyangyang04/kama-DesignPattern)
- [UML一一 类图关系 (泛化、实现、依赖、关联、聚合、组合)](https://blog.csdn.net/m0_37989980/article/details/104470064)

[01.单例模式（饿汉）](./create/01-singleton-hunger.ts)
[01.单例模式（懒汉）](./create/01-singleton-lazy.ts)

## 创建型模式

- 单例模式（Singleton）： 分为饿汉模式和懒汉模式，饿汉先
- 简单工厂模式(不属于 23 钟设计模式)：通过 if、else  或 switch 判断，简化了客户端。但是如果要添加新产品，需要修改工厂类代码。
- 工厂方法模式（factory Method）：在简单工厂模式技术上添加抽象工厂和具体工厂，每个具体工厂创建一个具体产品，添加新的产品需要添加新的工厂，而不修改原来的代码。
- 抽象工厂模式（Abstract Factory）
  - 在工厂方法模式基础上，每个工厂可以生产一系列相关的产品。
- 建造者模式：（Builder）
- 原型模式：Prototype）

## 结构型

- 适配器模式（Adapter）
- 桥接模式（Bridge）: 适合笛卡尔积的组合
- 组合模式（Composite）: 组合模式适用于任何需要构建具有部分-整体层次结构的场景，比如组织架构管理、文件系统的文件和文件夹组织等。
- 装饰者模式（Decorator）
- 外观模式（Facade）
- 享元模式（Flyweight）
- 代理模式（Proxy）

## 行为型

- 观察者模式（Observer）
- 策略模式（Strategy）
  - 把不需要外部清楚的细节尽可能封装起来（需要区分if 写在里面还是外面的辨别点。就是外部是否需要请求该细节）
  - 往往需要结合 简单工厂模式 简化客户端操作
- 命令模式（Command）
  - 需求对 “行为请求者” 与 ”行为实现者“ 进行松耦合
  - Invoker（服务员）、Receiver（烤肉师傅）、OrderCommand（烤羊肉）、xxxCommand（烤xxx肉）
- 中介者模式（Mediator）
- 备忘录模式 （Memento）
- 模板方法模式（Template Method）
- 迭代器模式（Iterator）
- 责任链模式（Chain of Responsibility）
- 解释器模式（Interpreter）
- 访问者模式（Visitor）

## 区别

- 简单工厂、工厂方法、抽象工厂的区别
  - 简单工厂模式：一个工厂方法创建所有具体产品
  - 工厂方法模式：一个工厂方法创建一个具体产品
  - 抽象工厂模式：一个工厂方法可以创建一类具体产品

- 抽象工厂模式 与 建造者模式的区别
  - 抽象工厂模式：适合创建一系列相关的对象，封装了对象创建的逻辑，便于扩展和管理不同的产品族。
  - 建造者模式：适合构建复杂对象，支持一步一步的构建过程，能灵活地处理不同的配置选项。

- 适配器模式和代理模式的区别
  - 适配器模式主要是让不能访问的能访问
  - 代理模式主要是限制访问，或在访问之前或之后做一些其他的事

## 注意点

- [装饰器模式](./structural/04.decorator.ts)的抽象类的使用
- [x] [桥接模式](./structural/03.bridge.ts) : 有点难理解，感觉还是太散了，需要在客户端组合。目的是什么？就是方便组装？使用场景呢？
  - 代码中的桥接就是两个抽象接口其中一个抽象接口接入到另一个抽象接口中，二者都有对应的实现类，这样就可以编程笛卡尔积组合，进而增强实用性和扩展性。
  - 如果程序设计上出现笛卡尔积的情况时就要考虑采用该设计模式了。如：热的小杯奶茶、热的大杯奶茶、凉的小杯奶茶、凉的大杯奶茶。
- [ ] [享元模式](./structural/07.flyWeight.ts) 案例不好，理解的不行，需要一个更好的案例。案例 （围棋 内部状态 颜色、外部状态 坐标）。

## 实战点

- [ ] [享源模式， studio 的 block 拖动实力化问题](./structural/07.flyWeight.ts)

## 类关系

### 关联和依赖的区别

#### 关联：长实线加箭头

- 定义：关联表示两个类之间的长期关系，通常是**拥有关系**或**引用关系**。一个类的对象可以通过关联关系访问另一个类的对象。
- 持续性：关联通常是持久的，也就是说，一个对象在其生命周期中会持续引用另一个对象。
- 双向或单向：关联可以是双向的或单向的。双向关联表示两个对象可以互相访问，而单向关联则表示只有一个对象可以访问另一个对象。
- 例子：教师和学生之间的关系。一个教师对象可能包含多个学生对象，而学生对象也可能引用该教师对象（双向关联）。

  ``` java
    class Teacher {
        List<Student> students;

    }

    class Student {
        Teacher teacher;
    }
  ```

#### 依赖：长虚线加箭头

- 定义：依赖表示一个类**临时性**地使用或需要另一个类的对象，通常是在某个方法或某个功能的执行过程中，短期地依赖该对象。依赖是一种更松散的关系。
- 短暂性：依赖关系通常是瞬时的，一个类只是在某个方法或操作中需要另一个类的帮助，执行完该操作后，依赖就结束了。
- 例子：司机依赖车来驾驶，但并不一定永久拥有某一辆车。依赖只存在于司机开车的时刻。

``` java

class Driver {
    void drive(Car car) {
        // 司机在需要驾驶的时候依赖车
        car.start();
    }
}

```

### 组合和聚合

#### 组合：长实线加实心菱形

``` java
// 轮子类，依赖于 Car
class Wheel {
    private String position;

    public Wheel(String position) {
        this.position = position;
    }

    public String getPosition() {
        return position;
    }
}

// 车类，组合多个轮子
class Car {
    private List<Wheel> wheels;

    public Car() {
        // 车类内部负责创建轮子对象
        wheels = new ArrayList<>();
        wheels.add(new Wheel("Front-Left"));
        wheels.add(new Wheel("Front-Right"));
        wheels.add(new Wheel("Rear-Left"));
        wheels.add(new Wheel("Rear-Right"));
    }

    public void showWheels() {
        for (Wheel wheel : wheels) {
            System.out.println(wheel.getPosition());
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // 创建车对象
        Car car = new Car();
        car.showWheels();

        // 当车对象被销毁时，轮子对象也随之销毁
        car = null;
        // 无法再访问车的轮子，因为它们被组合在一起，生命周期一同结束
    }
}
```

#### 聚合：长实线加空心菱形

``` java
// 学生类，生命周期独立于 Classroom
class Student {
    private String name;

    public Student(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}

// 班级类，聚合多个学生
class Classroom {
    private List<Student> students;

    // 构造函数接受外部创建的学生对象
    public Classroom(List<Student> students) {
        this.students = students;
    }

    public void showStudents() {
        for (Student student : students) {
            System.out.println(student.getName());
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // 学生对象在外部创建
        Student s1 = new Student("Alice");
        Student s2 = new Student("Bob");

        // 学生对象传入 Classroom
        List<Student> studentList = new ArrayList<>();
        studentList.add(s1);
        studentList.add(s2);

        // 创建班级对象
        Classroom classroom = new Classroom(studentList);
        classroom.showStudents();

        // Classroom 对象被销毁后，学生对象仍然存在
        classroom = null;
        System.out.println(s1.getName()); // 输出 "Alice"
    }
}
```

#### 组合和聚合的特点

- 两个方式可以互相转换，如何需要部分依赖整体的生命周期，则使用组合。如果需要独立，则使用聚合
