# (1） 编写 SQL 语句，请为 lineitem 表中的“itemid”列创建外键，以保证当要删除和 更新 product 表中的商品号时，会自动删除或更新 lineitem 表中匹配的行。
ALTER TABLE lineitem ADD INDEX (orderid);
ALTER TABLE lineitem ADD CONSTRAINT fk_lineitem_product_2
 FOREIGN KEY (orderid) REFERENCES product(productid) on DELETE CASCADE;

ALTER TABLE lineitem DROP FOREIGN KEY fk_lineitem_product;

DELETE from product where productid = 'FI-SW-01';

select * from lineitem;

# (2） 编写 SQL 语句，计算 lineitem 表中每条记录的商品金额。
SELECT unitprice, itemid FROM lineitem;

# (3） 编写 SQL 语句，查询 product 表中的商品名和档次。档次按价格划分，1000 元以 下显示为“低价商品”，1000 元到 2000 元之间显示为“中档商品”，2000 元及以 上显示为“高档商品”。 
SELECT name,
    CASE WHEN listprice < 1000 then '低价商品'
         WHEN listprice >= 1000 AND listprice < 2000 then '中档商品'
         WHEN listprice >= 2000 then '高档商品'
    end as '档次'
FROM product;

# (4） 编写 SQL 语句，查询 account 表中女客户的姓名、地址和电话，显示的列标题要 求用中文“姓名”、“地址”、“电话”表示。
SELECT fullname as '姓名', address as '地址', phone as '电话' from account;

# (5） 编写 SQL 语句，查询 orders 表中订单总价在 200~500 元内的订单信息。
SELECT * from orders where totalprice >= 200 and totalprice <= 500;

# (6） 编写 SQL 语句，显示 orders 表中单笔订单金额大于等于 300 元的用户名、订单总价。
SELECT account.fullname ,orders.totalprice from orders left join account on orders.userid = account.userid where totalprice >= 300;

# (7） 编写 SQL 语句，计算 orders 表中的成交总额。
SELECT SUM(totalprice) from orders;

# (8） 编写 SQL 语句，按性别统计客户人数。
SELECT sex, count(sex) as '人数' from account group by sex;

# (9） 编写 SQL 语句，显示 lineitem 表中商品的购买总数量超过 2 件商品号和购买总数 量，并按购买数量从小到大排序。
SELECT itemid, quantity from lineitem where quantity > 2 order by quantity;

# (10） 编写 SQL 语句，当订单号为“20130411”的订单已经发货后，根据该订单的订单 明细表修改商品表的库存。
UPDATE product
right join (
    SELECT DISTINCT lineitem.itemid AS productId, lineitem.quantity AS qty
    FROM orders
    LEFT JOIN lineitem ON orders.orderid = lineitem.orderid
) AS t on product.productid = t.productId
SET product.qty = product.qty - t.qty;


# select * from product;

/*select * from product
right join (
    SELECT DISTINCT lineitem.itemid AS productId, lineitem.quantity AS qty
    FROM orders
    LEFT JOIN lineitem ON orders.orderid = lineitem.orderid
) AS t on product.productid = t.productId
*/

# UPDATE T1, T2,
# [INNER JOIN | LEFT JOIN] T1 ON T1.C1 = T2. C1
# SET T1.C2 = T2.C2,
#     T2.C3 = expr
# WHERE condition

