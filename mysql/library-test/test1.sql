show databases;
use library;
show tables ;
select * from 读者表;
select * from 读者类型表;
select * from 借阅表;
select * from 库存表;
# (11） 编写 SQL 语句,建立数据完整性约束。为读者表创建外键，其“类别号”列的值必 须是读者类型表中“类别号”列存在的值，删除或修改读者类型表中的类别号值时， 读者表中“类别号”列的数据也随之变化。
ALTER TABLE 读者表 ADD FOREIGN KEY (类别号) REFERENCES 读者类型表 (类别号) ON DELETE CASCADE  ON UPDATE  CASCADE;
# 更新联动测试 UPDATE 读者类型表 SET 类别号 = 1 where 类别号 = 5;
# 更新联动测试 delete FROM 读者类型表 where 类别号 = 1;

# (12） 编写 SQL 语句,建立数据完整性约束。修改读者类型表，可借数量必须在 0~30 本 的范围内。
ALTER TABLE 读者类型表 ADD CONSTRAINT ck_num_range CHECK (可借数量 >= 0 AND 可借数量<= 30);
# 测试是否能新增成功 INSERT INTO 读者类型表 value (7, '学生', 200, 30);

# (13） 编写 SQL 语句，读者编号为“2001”的职工借阅了一本条码为“223410”的图书， 请在借阅表中添加一条记录，借阅号为顺序编号，借阅日期为系统当天日期。修改 库存表中该图书的库存状态为“借出”
INSERT INTO 借阅表 value ('100010', '223410', '2001', DATE_FORMAT(NOW(), '%Y/%m/%d'), '', '借阅');
UPDATE 库存表
SET 库存状态 = '借出'
WHERE 条码 = '223410';

# (14） 编写 SQL 语句，当读者“苏明”毕业了，请将该读者的信息从数据库中删除。
ALTER TABLE 借阅表 ADD FOREIGN KEY (读者编号) REFERENCES 读者表 (读者编号) ON DELETE CASCADE;
DELETE FROM 读者表 WHERE 姓名 = '苏明';

# (15） 编写 SQL 语句，查询库存表中的书号和库存状态列，要求消除重复行。

# (16） 编写 SQL 语句，查询库存表中存放位置中含“A”且库存状态为“借出”的图书的 信息。
# (17） 编写 SQL 语句，查询“张小东”的基本情况和借书情况。
# (18） 编写 SQL 语句，查询每个读者的姓名、单位、可借天数和可借数量。
# (19） 编写 SQL 语句，按单位统计出该单位的读者人数。
# (20） 编写 SQL 语句，对借阅表先按读者编号，再按条码统计图书的借阅次数，并显示小 计。
