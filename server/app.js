//模块
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser')
const cors = require("cors")
const request = require("request");
const multer = require('multer')
const path = require('path')
//路由文件
const user = require('./routes/user.js')
const bjnews = require('./routes/bjnews.js')
// const search=require('./routes/search.js')
// const detail=require('./routes/account-detail.js')
// const order=require('./routes/order.js')
// const video=require('./routes/video.js')

var app = express();
app.listen(1997);
//配置session
app.use(session({
	secret: '128位随机字符串',
	resave: false,
	saveUninitialized: true,
}))
/*挂载 */
app.use(express.static(__dirname + '/public'));
/*中间件 */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
})
console.log("            no-name服务运行中 ...")


app.use('/user', user);
app.use('/bjnews', bjnews);
// app.use('/search',search);
// app.use('/detail',detail);
// app.use('/order',order);
// app.use('/video',video);
