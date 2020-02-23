SET NAMES UTF8;
USE no_name;
#用户信息表
DROP TABLE IF EXISTS moment;
CREATE TABLE moment(
	momentId INT PRIMARY KEY AUTO_INCREMENT,
	uid INT,#用户id
	Thumb INT default 0,#点赞数
	content VARCHAR(518) default '您出生了！',#内容
	creationTime DATETIME,#评论创建时间
  images VARCHAR(1036) default '',#发表的图片
  video VARCHAR(1036) default '',#发表的视频
  comments INT default 0#瞬间评论数量
);
-- INSERT INTO user_info VALUES(1,"地铁站的风","18696052995",'123456','2020-02-22 23:59:59',0);