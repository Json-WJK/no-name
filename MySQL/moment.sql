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
  comments INT default 0,#瞬间评论数量
  genre INT default 1#评论类型 1正常 所有人可见 2仅自己可见
);


INSERT INTO `moment` (`momentId`, `uid`, `Thumb`, `content`, `creationTime`, `images`, `video`, `comments`, `genre`) VALUES
(1, 1, 0, '您出生了！', '2020-02-23 16:28:28', '', '', 0, 2),
(2, 2, 0, '您出生了！', '2020-06-22 10:18:24', '', '', 0, 2),
(3, 3, 0, '您出生了！', '2020-06-22 18:21:33', '', '', 0, 2);