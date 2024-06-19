# 单文件

## 命令行编译于运行

```bash
# 编译 java 文件： javac 文件名.java
javac MainDemo.java

# 运行 java 文件：java 文件名 (不用 .class 后缀）
javac MainDemo
```

## 通过 java 和 classpath 直接运行

[ ]TODO

## 编译成 jar 包，并运行

```bash
# 编译 java 文件：javac 文件名.java, -d xxx 指定输出目录
javac *.java -d output


# 打包 jar 包：jar -cvf 文件名.jar *.class （不包含清单文件）
# 打包 jar 包：jar -cvfm 文件名.jar META-INF/MANIFEST.MF *.class （包含清单文件）
jar -cvfm MainDemo.jar META-INF/MANIFEST.MF  *.class

# 运行 jar 包：java -jar 文件名.jar
java -jar MainDemo.jar
```

### MANIFEST.MF 清单内容如下 （注意最后一行空行）

```
Manifest-Version: 1.0
Main-Class: MainDemo 
Created-By: 17.0.8 (Oracle Corporation)


```

### 参考文档

- [java打jar包的几种方式详解](<https://www.cnblogs.com/mq0036/p/8566427.html>)
