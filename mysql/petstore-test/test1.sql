# 1. 编写 SQL 语句,请为 product 表中“catid”列创建外键，以保证当要删除 category 表中“catid”列的值时，如果 product 表中的“catid”列还有记录时，则拒绝对 category 表的删除操作。（将 SQL 语句填写到答题卷的相应位置）
ALTER TABLE product ADD FOREIGN KEY (catid) REFERENCES category (catid);
# 测试是否删除成功 DELETE FROM category where catid = '1';

# 2. 编写 SQL 语句，请为 lineitem 表中的“orderid”列创建外键，以保证当要删除 orders 表中的订单号时，会自动删除 lineitem 表中匹配的行。（将 SQL 语句填写到 答题卷的相应位置）
Alter TABLE lineitem ADD FOREIGN KEY (orderid) REFERENCES orders (orderid) ON DELETE CASCADE;
# TODO： not ok,不知道为啥
# 测试是否及联删除成功
# DELETE FROM orders WHERE orderid = '20130411';

# 3. 编写 SQL 语句，请为 account 表中的“sex”列添加 CHECK 完整性约束，以保证 性别只能包含“男”或“女”。（将 SQL 语句填写到答题卷的相应位置）
ALTER  TABLE account ADD CONSTRAINT sex_check CHECK ( sex IN ('男', '女') );

# 4. 编写 SQL 语句，当新从澳大利亚购进一批天使鱼，数量为 50 尾，进价为 15 元/尾， 请按库存与新进商品的平均值调整商品的成本价格。该商品将以高出成本价格 20% 的市场价格卖出，请调整商品的市场价格和数量。（将 SQL 语句填写到答题卷的相 应位置）
UPDATE product
SET
unitcost = (
    SELECT (t.totalAmount / t.totalQty) as avgPrice
    FROM (
       SELECT listprice * qty + 50 * 15 as totalAmount, qty + 50 as totalQty , name from product where name = '天使鱼'
     ) AS t
),
qty = (
    SELECT t.totalQty
    FROM (
       SELECT qty + 50 as totalQty , name from product where name = '天使鱼'
     ) AS t
)
WHERE name = '天使鱼';
## TODO: 不知道该如何优化


# 5. 编写 SQL 语句，请将用户名为“u0004”的所有订购信息删除，包括订单表和订单 明细表的信息。（将 SQL 语句填写到答题卷的相应位置）
DELETE FROM lineitem WHERE orderid = (
    SELECT orderid FROM orders WHERE userid = 'u0004'
);
DELETE FROM  orders WHERE userid = 'u0004';

# 6. 编写 SQL 语句，查询 account 表中客户的姓名、地址和电话，显示的列标题要求 显示“姓名”、“地址”“电话”。（将 SQL 语句填写到答题卷的相应位置）
SELECT fullname as 姓名, address as 地址, phone as 电话 from account;

# 7. 编写 SQL 语句，显示 orders 表中单笔订单金额大于等于 200 元的用户号、订单总价和订单状态。（将 SQL 语句填写到答题卷的相应位置）
SELECT userid, totalprice, status from orders where totalprice >= 200;
# 8. 编写 SQL 语句，统计 2020 年 5 月以前订购了商品的女客户的姓名和订单总价。（将 SQL 语句填写到答题卷的相应位置）
# SELECT orders.totalprice, t.fullname  FROM orders inner join  (
#     SELECT userid, fullname from account where sex = '女'
# )  AS t
# where t.userid = orders.userid;

# 内联
SELECT orders.totalprice, account.fullname
FROM orders
INNER JOIN account
WHERE account.userid = orders.userid AND account.sex = '女';

SELECT orders.totalprice, account.fullname
FROM orders
left JOIN  account ON account.sex = '女'
WHERE account.userid = orders.userid;

SELECT orders.totalprice, account.fullname
FROM orders
RIGHT JOIN account ON account.sex = '女'
WHERE account.userid = orders.userid;

# 9. 编写 SQL 语句，显示 orders 表中的单笔最高成交额和最低成交额。（将 SQL 语句 填写到答题卷的相应位置）

SELECT MAX(totalprice), MIN(totalprice) FROM orders;