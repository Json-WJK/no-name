SET NAMES UTF8;
DROP DATABASE IF EXISTS no_name;
CREATE DATABASE no_name CHARSET=UTF8;
USE no_name;
#用户信息表
DROP TABLE IF EXISTS user_info;
CREATE TABLE user_info(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),#用户名称
	phone VARCHAR(32),#手机
	upwd VARCHAR(32),#密码
	creationTime DATETIME,#账号创建时间
	momentQuantity INT#用户发布瞬间总数量
);
-- INSERT INTO user_info VALUES(1,"地铁站的风","18696052995",'123456','2020-02-22 23:59:59',0);