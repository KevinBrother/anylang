# MySQL

## 常用 DDL（Data Definition Language） 数据库定义语言
- DDL用于定义数据库结构和模式，包括表、列、索引、视图等。
- DDL语句用于创建、修改和删除数据库对象。
- 常见的DDL语句包括CREATE、ALTER和DROP等。

- 创建表
```sql
create table xxx (
    name VARCHAR(255),
    age INT,
    phone INT
);
```

- 修改表
```sql
Alter TABLE xxx MODIFY phone VARCHAR(11);
```

- 删除表
```sql
DROP TABLE  IF EXISTS xxx;
```

## 常用 DML（Data Manipulation Language）数据库操作语言
- DML用于对数据库中的数据进行操作，包括插入、查询、更新和删除数据。
- DML语句用于处理数据库中的实际数据。
- 常见的DML语句包括SELECT、INSERT、UPDATE和DELETE等。


## 常见概念

### 主键

### 外键

## 文档
[MySQL 8.4 Reference Manual](https://dev.mysql.com/doc/refman/8.4/en/create-table.html)
[mysql-tutorial](https://github.com/guobinhit/mysql-tutorial/tree/master?tab=readme-ov-file)