SET NAMES UTF8;
DROP DATABASE IF EXISTS no_name;
CREATE DATABASE no_name CHARSET=UTF8;
USE no_name;
#用户信息表
DROP TABLE IF EXISTS user_info;
CREATE TABLE user_info(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),#账号
	phone VARCHAR(32),#手机
	upwd VARCHAR(32)
);
INSERT INTO zhw_user VALUES(1,"920819994","18696052995",'123456');