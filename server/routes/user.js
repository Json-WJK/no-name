const express = require('express');
//引入mysql连接池
const pool = require('../pool.js');
//创建路由器
var router = express.Router();

// 用户注册
router.post('/register', (req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
	var obj = req.body;
	var $uname = obj.uname;
	var $upwd = obj.upwd
	var $phone = obj.phone
	if ($uname == "") {
		res.write(JSON.stringify({
			ok: 0,
			msg: "用户名不能为空"
		}))
		return;
	}
	if ($upwd == "") {
		res.write(JSON.stringify({
			ok: 0,
			msg: "密码不能为空"
		}))
		return;
	}
	if ($phone == "") {
		res.write(JSON.stringify({
			ok: 0,
			msg: "手机号不能为空"
		}))
		return;
	}
	var sql = 'select * from user_info where uname=?'
	pool.query(sql, [$uname], (err, result) => {
		console.log('查询结果', result)
		if (err) throw err;
		if (result.length > 0) {
			res.write(JSON.stringify({
				ok: 0,
				msg: "该昵称已被注册哦！"
			}))
			res.end();
			return
		}
		sql = 'INSERT INTO user_info (uname,phone,upwd) VALUES(?,?,?)';
		pool.query(sql, [$uname, $phone, $upwd], (err, result) => {
			if (err) throw err;
			if (result.affectedRows > 0) {
				res.write(JSON.stringify({
					ok: 1,
					msg: "注册成功！"
				}))
			} else {
				res.write(JSON.stringify({
					ok: 0,
					msg: "注册失败！"
				}))
			};
			console.log('完成注册')
			res.end();
		});
	});

});

// 用户登录
router.post('/login', (req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
	var phone = req.body.phone;
	var upwd = req.body.upwd;
	pool.query(
		"select uid,uname,phone,signature from user_info where phone=? and upwd=?",
		[phone, upwd],
		(err, result) => {
			if (err) console.log(err);
			if (result.length > 0) {
				var user = result[0]
				req.session.uid = user.uid
				res.write(JSON.stringify({
					ok: 1,
					msg: "登录成功！",
					data: {
						items: result
					}
				}))
			} else {
				res.write(JSON.stringify({
					ok: 0,
					msg: "用户名或密码错误！"
				}))
			}
			res.end();
		}
	)
});

// 修改用户信息
router.post('/setUserInfo', (req, res) => {
	console.log(req, '接收数据')
})

/*用户登录状态 */
// router.get("/islogin",(req,res)=>{
// 	res.writeHead(200);
// 	console.log(req.session.uid)
// 	if(req.session.uid===undefined){
// 	  res.write(JSON.stringify({ok:0}))
// 	  res.end()
// 	}else{
// 	  var uid=req.session.uid;
// 	  var sql="select * from zhw_user where uid=?"
// 	  pool.query(sql,[uid],(err,result)=>{
// 		if(err) console.log(err);
// 		var user=result[0];
// 		res.write(JSON.stringify({
// 		  ok:1,uname:user.uname
// 		}))
// 		res.end()
// 	  })
// 	}	
// })

// /*退出登录 */
// router.get("/signout",(req,res)=>{
// req.session["uid"]=undefined;
// console.log("           "+"一位用户悄悄离开了平台")
// res.end();
// })



// /*验证用户是否存在*/
// router.post('/verify',(req,res)=>{
// 	var $uname=req.body.uname;
// 	var sql='SELECT * FROM zhw_user where uname=?';
// 	pool.query(sql,[$uname],(err,result)=>{
// 		if(err) throw err;
// 		console.log(result)
// 		if(result.length>0){
// 			res.send("1");
// 		}else{
// 			res.send("0");
// 		};
// 		res.end()
// 	});
// });

// /*用户信息 */
// router.post("/data",(req,res)=>{
// 	var $uname=req.body.uname;
// 	var sql="SELECT * FROM zhw_user where uname=?";
// 	pool.query(sql,[$uname],(err,result)=>{
// 		if(err) throw err;
// 		res.writeHead(200,{
// 			"Content-Type":"application/json;charset=utf-8",
// 			"Access-Control-Allow-Origin":"*"
// 		})
// 		res.write(JSON.stringify(result));
// 		res.end();
// 	})
// })

// /*账户充值 */
// router.post("/recharge",(req,res)=>{
// 	var $up=req.body.up;
// 	var $uname=req.body.uname;
// 	var $date=req.body.date;
// 	var sql="update zhw_user set balance=balance+? where uname=?";
// 	pool.query(sql,[$up,$uname],(err,result)=>{
// 		if(err) console.log(err);
// 		res.writeHead(200,{
// 			"Content-Type":"application/json;charset=utf-8",
// 			"Access-Control-Allow-Origin":"*"
// 		})
// 		res.write(JSON.stringify(result));
// 		res.end();
// 		console.log("           "+$date+"           "+$uname+"充值了"+$up+"元");
// 	})
// })

// /*用户正在租用的订单 */
// router.post("/lease",(req,res)=>{
// 	var $uname=req.body.uname;
// 	var $date=req.body.date;
// 	var output={name:{},account:{},duration:{}};
// 	var sql1="SELECT game_name FROM zhw_game_details where game_id IN (SELECT game_id FROM zhw_lease where uid=(SELECT uid FROM zhw_user where uname=?))";
// 	var sql2="SELECT * FROM zhw_game_account where game_id IN (SELECT game_id FROM zhw_lease where uid=(SELECT uid FROM zhw_user where uname=?))";
// 	var sql3="SELECT * FROM zhw_lease where uid=(SELECT uid FROM zhw_user where uname=?)"
// 	Promise.all([
// 		new Promise(function(open){
// 			pool.query(sql1,[$uname],(err,result)=>{
// 				if(err) console.log(err);
// 				output.name=result;
// 				open();
// 			})
// 		}),
// 		new Promise(function(open){
// 			pool.query(sql2,[$uname],(err,result)=>{
// 				if(err) console.log(err);
// 				output.account=result;
// 				open();
// 			})
// 		}),
// 		new Promise(function(open){
// 			pool.query(sql3,[$uname],(err,result)=>{
// 				if(err) console.log(err);
// 				output.duration=result;
// 				open();
// 			})
// 		})
// 	]).then(function(){
// 		res.writeHead(200,{
// 			"Content-Type":"application/json;charset=utf-8",
// 			"Access-Control-Allow-Origin":"*"
// 		})
// 		res.write(JSON.stringify(output));
// 		res.end();
// 		console.log("           "+$date+"           "+$uname+"刚刚查看了自己的资料!");
// 	})
// })
// /*用户租过的账号*/
// router.post("/often",(req,res)=>{
// 	var $uname=req.body.uname;
// 	var $date=req.body.date;
// 	var output={name:{},account:{}};
// 	var sql1="SELECT game_name FROM zhw_game_details where game_id IN (SELECT game_id FROM zhw_often where uid=(SELECT uid FROM zhw_user where uname=?))";
// 	var sql2="SELECT * FROM zhw_game_account where game_id IN (SELECT game_id FROM zhw_often where uid=(SELECT uid FROM zhw_user where uname=?))";
// 	Promise.all([
// 		new Promise(function(open){
// 			pool.query(sql1,[$uname],(err,result)=>{
// 				if(err) console.log(err);
// 				output.name=result;
// 				open();
// 			})
// 		}),
// 		new Promise(function(open){
// 			pool.query(sql2,[$uname],(err,result)=>{
// 				if(err) console.log(err);
// 				output.account=result;
// 				open();
// 			})
// 		})
// 	]).then(function(){
// 		res.writeHead(200,{
// 			"Content-Type":"application/json;charset=utf-8",
// 			"Access-Control-Allow-Origin":"*"
// 		})
// 		res.write(JSON.stringify(output));
// 		res.end();
// 	})
// })

// /*用户收藏的账号*/
// router.post("/enshrine",(req,res)=>{
// 	var $uname=req.body.uname;
// 	console.log($uname)
// 	var $date=req.body.date;
// 	var output={name:{},account:{}};
// 	var sql1="SELECT game_name FROM zhw_game_details where game_id IN (SELECT game_id FROM zhw_enshrine where uid=(SELECT uid FROM zhw_user where uname=?)) order by comment_id desc";
// 	var sql2="SELECT * FROM zhw_game_account where game_id IN (SELECT game_id FROM zhw_enshrine where uid=(SELECT uid FROM zhw_user where uname=?))";
// 	Promise.all([
// 		new Promise(function(open){
// 			pool.query(sql1,[$uname],(err,result)=>{
// 				if(err) console.log(err);
// 				output.name=result;
// 				open();
// 			})
// 		}),
// 		new Promise(function(open){
// 			pool.query(sql2,[$uname],(err,result)=>{
// 				if(err) console.log(err);
// 				output.account=result;
// 				open();
// 			})
// 		})
// 	]).then(function(){
// 		res.writeHead(200,{
// 			"Content-Type":"application/json;charset=utf-8",
// 			"Access-Control-Allow-Origin":"*"
// 		})
// 		res.write(JSON.stringify(output));
// 		res.end();
// 	})
// })

// /*收藏账号 */
// router.post("/enshrines",(req,res)=>{
// 	var game_id=req.body.game_id;
// 	var uname=req.body.uname;
// 	var sql="INSERT INTO zhw_enshrine (game_id,uid) values(?,(select uid from zhw_user where uname=?))";
// 	pool.query(sql,[game_id,uname],(err,result)=>{
// 		if(err) console.log(err);
// 		//res.send(result);
// 		if(result.affectedRows>0){
// 			res.send("1");
// 		}else{
// 			res.send("0");
//     	};
// 		res.end();
// 	  })
// 	})

// /*取消收藏 */


// /*用户租过的订单 */
// //  router.post("/lease",(req,res)=>{
// //  	var $uname=req.body.uname;
// //  	/*备注一下这个sql语句     通过uname查找uid  再通过uid查找game_id  再通过game_id查找game_name和账号详情*/
// //  	var sql="SELECT *,(SELECT game_name FROM zhw_game_details where game_id=(SELECT game_id FROM zhw_lease where uid=(SELECT uid FROM zhw_user where uname=920819994))) as game_name  FROM zhw_game_account where game_id=(SELECT game_id FROM zhw_lease where uid=(SELECT uid FROM zhw_user where uname=920819994))";
// // 	 var sql="SELECT *,game_name FROM zhw_game_details WHERE game_id IN ( SELECT game_id FROM zhw_lease WHERE uid = ( SELECT uid FROM zhw_user WHERE uname = ? ) )"; 
// // 	 pool.query(sql,[$uname,$uname],(err,result)=>{
// //  		if(err) throw err;
// // 		res.writeHead(200,{
// // 		"Content-Type":"application/json;charset=utf-8",
// // 			"Access-Control-Allow-Origin":"*"
// // 		})
// //  		res.write(JSON.stringify(result));
// //  		res.end();
// //  	})
// //  })



// /*微信注册 */
// //用户注册
// router.post('/app_register',(req,res)=>{
// 	var obj=req.body;
// 	var $uname=obj.uname;	
// 	if($uname==""){
// 		res.send("用户名不能为空")
// 		return;
// 	}
// 	var sql='INSERT INTO zhw_user (uname) VALUES(?)';
// 	pool.query(sql,[$uname],(err,result)=>{
// 		if(err) throw err;
// 		if(result.affectedRows>0){
// 		 	 res.send("注册成功！");
// 		}else{
// 		 	 res.send("注册失败！")
// 		};
// 		res.end();
// 	});
// });
// /*评论 */
// router.post('/comment',(req,res)=>{
// 	var game_id=req.body.game_id;
// 	var uname=req.body.uname;
// 	var content=req.body.content;
// 	var grade=req.body.grade;
// 	var sql='INSERT INTO zhw_comment ( game_id,uname,content,grade) VALUES(?,?,?,?)';
// 	pool.query(sql,[game_id,uname,content,grade],(err,result)=>{
// 		if(err) console.log(err)
// 		if(result.affectedRows>0){
// 			res.send("发表成功！");
// 	  }else{
// 			res.send("注册失败！")
// 	  };
// 	})
// })

// /*删除收藏 */
// router.post("/d_enshrines",(req,res)=>{
// 	var game_id=req.body.game_id;
// 	var uname=req.body.uname;
// 	var sql="delete from zhw_enshrine where uid=(select uid from zhw_user where uname=?) AND game_id=?";
// 	pool.query(sql,[uname,game_id],(err,result)=>{
// 		if(err) console.log(err);
// 		//res.send(result);
// 		console.log(result)
// 		if(result.affectedRows>0){
// 			res.send("1");
// 		}else{
// 			res.send("0");
//     	};
// 		res.end();
// 	  })	
// 	})

module.exports = router;