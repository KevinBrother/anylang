show databases ;
use petstore;
show tables ;

#（1） 编写 SQL 语句，请为 orders 表中的“userid”列创建外键，以保证当要删除和更 新 account 表中的数据时，只要 orders 表中还有该客户的订单，则拒绝 account 表进行删除和更新操作。（将 SQL 语句填写到答题卷的相应位置）
ALTER TABLE orders ADD FOREIGN KEY (userid) REFERENCES account (userid);

# （2） 编写 SQL 语句，当订单号为“20130411”的订单已经发货，请将该订单的状态修 改为“1”（将 SQL 语句填写到答题卷的相应位置）
UPDATE orders set status = 1 where orderid = '20130411';

# （3） 编写 SQL 语句，查询 lineitem 表中的商品号和单价，要求消除重复行。（将 SQL 语句填写到答题卷的相应位置）
SELECT DISTINCT orderid, unitprice from lineitem;

# （4） 编写 SQL 语句，查询 account 表中客户的姓名和性别，要求性别为“男”时显示 1， 为“女”时显示 0。（将 SQL 语句填写到答题卷的相应位置）
SELECT fullname,
       CASE when sex = '男' then 1
            when sex = '女' then 0
        end as sex
from account;

# （5） 编写 SQL 语句，查询 product 表中商品号倒数第 4 个标号为“W”的商品信息。（将 SQL 语句填写到答题卷的相应位置）
SELECT * from product where SUBSTRING(productid, LENGTH(productid) - 3, 1) = 'W';;

# （6） 编写 SQL 语句，查询 lineitem 表中的订单号、商品名称和购买数量。（将 SQL 语句填写到答题卷的相应位置）
SELECT lineitem.orderid, lineitem.quantity, product.name from lineitem left join product on lineitem.itemid = product.productid;

#（7） 编写 SQL 语句，查询“刘晓和”的基本情况和订单情况。（将 SQL 语句填写到答题 卷的相应位置）
select * from account left join orders on account.userid = orders.userid where account.fullname = '刘晓和';

#（8） 编写 SQL 语句，统计客户总数。（将 SQL 语句填写到答题卷的相应位置）
select count(*) as '客户总数' from account;

#（9） 编写 SQL 语句，按商品类别统计各类商品总数、平均单价。（将 SQL 语句填写到答 题卷的相应位置）
select sum(qty), avg(unitcost), productid from product group by productid;

# （10） 编写 SQL 语句，将 orders 表按用户号从小到大排序，用户号相同的按订单日期从大 到小排序。（将 SQL 语句填写到答题卷的相应位置）
select * from orders order by userid, orderdate desc;

