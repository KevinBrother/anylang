# 设计模式

## 创建型模式

单例模式（Singleton）： 分为饿汉模式和懒汉模式，饿汉先
简单工厂模式(不属于 23 钟设计模式)：通过 if、else 或 switch 判断，简化了客户端。但是如果要添加新产品，需要修改工厂类代码。
工厂方法模式（factory Method）：在简单工厂模式技术上添加抽象工厂和具体工厂，每个具体工厂创建一个具体产品，添加新的产品需要添加新的工厂，而不修改原来的代码。
抽象工厂模式（Abstract Factory）
在工厂方法模式基础上，每个工厂可以生产一系列相关的产品。
建造者模式：（Builder）
原型模式：Prototype）

## 结构型

适配器模式（Adapter）
桥接模式（Bridge）: 适合笛卡尔积的组合
组合模式（Composite）: 组合模式适用于任何需要构建具有部分-整体层次结构的场景，比如组织架构管理、文件系统的文件和文件夹组织等。
装饰者模式（Decorator）
外观模式（Facade）
享元模式（Flyweight）
代理模式（Proxy）

## 行为型

观察者模式（Observer）
策略模式（Strategy）
把不需要外部清楚的细节尽可能封装起来（需要区分if 写在里面还是外面的辨别点。就是外部是否需要请求该细节）
往往需要结合 简单工厂模式 简化客户端操作
命令模式（Command）
需求对 “行为请求者” 与 ”行为实现者“ 进行松耦合
Invoker（服务员）、Receiver（烤肉师傅）、OrderCommand（烤羊肉）、xxxCommand（烤xxx肉）
中介者模式（Mediator） :调停者模式。
备忘录模式 （Memento）
模板方法模式（Template Method）
迭代器模式（Iterator）
状态模式 (State)
责任链模式（Chain of Responsibility）
解释器模式（Interpreter）
访问者模式（Visitor）
