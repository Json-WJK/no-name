// 公众号相关接口
const express = require('express');
const multer = require('multer')
const path = require('path')
//引入mysql连接池
const pool = require('../pool.js');
//创建路由器
var router = express.Router();


// 用户注册
router.post('/share', (req, res) => {
  console.log(req.body, '请求参数')
  res.write(JSON.stringify({
    ok: 1, 
    msg: req.body
  }))
});


module.exports = router;