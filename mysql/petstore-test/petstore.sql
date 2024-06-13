show databases;
CREATE DATABASE petstore;
use petstore;

show tables ;
Alter TABLE account MODIFY phone VARCHAR(11);
DELETE FROM account limit 4;
select * from product;

# ======================= init =======================

DROP TABLE IF EXISTS account;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS lineitem;

CREATE TABLE account (
    userid VARCHAR(255),
    fullname VARCHAR(255),
    password VARCHAR(255),
    sex ENUM ('男','女'),
    address VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(11),
    PRIMARY KEY (userid)
);

INSERT INTO account (userid, fullname, password, sex, address, email, phone)
values
('u0001', '刘晓和', '123456', '男', '广东深圳市', 'liuxh@163.com', '13512345678'),
('u0002', '张嘉庆', '123456', '男', '广东深圳市', 'zhangjq@163.com', '13512345679' ),
('u0003', '罗红红', '123456', '女', '广东深圳市', 'longhh@163.com', '13512345689' ),
('u0004', '李昊华', '123456', '女', '广东广州市', 'lihh@163.com', '13812345679' ),
('u0005', '吴美霞', '123456', '女', '广东珠海市', 'wumx@163.com', '13512345879' ),
('u0006', '王天赐', '123456', '男', '广东中山市', 'wangtc@163.com', '13802345679' );


CREATE TABLE category (
    catid int,
    catname VARCHAR(255),
    cades VARCHAR(255),
    PRIMARY KEY (catid)
);

INSERT INTO category (catid, catname, cades)
VALUES
('01', '鸟类', ''),
('02', '猫', ''),
('03', '狗', ''),
('04', '鱼', ''),
('05', '爬行类', '');


CREATE TABLE product (
    productid VARCHAR(255),
    catid INT,
    name VARCHAR(255),
    descn VARCHAR(255),
    listprice DECIMAL(10,2),
    unitcost DECIMAL(10,2),
    qty INT,
    PRIMARY KEY (productid)
);

INSERT INTO product (productid, catid, name, descn, listprice, unitcost, qty)
VALUES
('AV-CB-01', 05, '亚马逊鹦鹉', '75 岁以上高龄的好伙伴' ,50.00 ,60.00, 100),
('AV-SB-02', 05, '燕雀', '非常好的减压宠物' ,45.00 ,50.00, 98),
('FI-FW-01', 01, '锦鲤', '来自日本的淡水鱼' ,45.50 ,45.50, 300),
('FI-FW-02', 01, '金鱼', '来自中国的淡水鱼' ,6.80 ,6.80, 100),
('FI-SW-01', 01, '天使鱼', '来自澳大利亚的海水鱼' ,10.00 ,10.00, 100),
('FI-SW-02', 01, '虎鲨', '来自澳大利亚的海水鱼' ,18.50 ,20.00, 200),
('FL-DLH-02', 04, '波斯猫', '友好的家居猫, 像公主一样高贵' ,1000.00 ,1200.00, 15),
('FL-DSH-01', 04, '马恩岛猫', '灭鼠能手' ,80.00 ,100.00, 40),
('K9-BD-01', 02, '牛头犬', '来自英格兰的友好的狗' ,1350.00 ,1500.00, 5),
('K9-CW-01', 02, '吉娃娃犬', '很好的陪伴狗' ,180.00 ,200.00, 120),
('K9-DL-01', 02, '斑点狗', '来自消防队的大狗' ,3000.00 ,3000.00, 1),
('K9-PO-02', 02, '狮子犬', '来自法国的可爱的狗' ,2000.00 ,2000.00, 3),
('K9-RT-01', 02, '金毛猎犬', '大家庭的狗', 300.00, 300.00, 200),
('K9-RT-02', 02, '拉布拉多猎犬', '大猎狗', 800.00, 800.00, 30),
('RP-LI-02', 03, '鬣蜥', '友好的绿色朋友', 60.00, 78.00, 40),
('RP-SN-01', 03, '响尾蛇', '兼当看门狗', 200.00, 240.00, 10);

CREATE TABLE orders (
 orderid VARCHAR(255),
 userid VARCHAR(255),
 orderdate DATETIME,
 totalprice DECIMAL(10,2),
 status bool
);

ALTER TABLE orders
# DROP PRIMARY KEY,
ADD PRIMARY KEY (orderid);

INSERT INTO orders (orderid, userid, orderdate, totalprice, status)
VALUES
('20130411', 'u0001', '2013-4-11 15:07:34', 500.00, 0),
('20130412', 'u0002', '2013-4-9 15:08:11', 305.60, 0),
('20130413', 'u0003', '2013-4-15 15:09:00', 212.40, 0),
('20130414', 'u0003', '2013-4-16 15:09:30', 120.45, 1),
('20130415', 'u0004', '2013-4-2 15:10:05', 120.30, 0);


CREATE TABLE lineitem (
    orderid VARCHAR(255) not null,
    itemid VARCHAR(255),
    quantity INT,
    unitprice DECIMAL(10,2)
);

INSERT INTO lineitem (orderid, itemid, quantity, unitprice)
VALUES
('20130411', 'FI-SW-01', 10, 18.50),
('20130411', 'FI-SW-02', 12, 16.50),
('20130412', 'K9-BD-01', 2, 120.00),
('20130412', 'K9-PO-02', 1, 220.00),
('20130413', 'K9-DL-01', 1, 130.00),
('20130414', 'RP-SN-01', 2, 125.00),
('20130415', 'AV-SB-02', 2, 50.00);
