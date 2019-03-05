var express = require('express');
var router = express.Router();

//后端接收文件要一个模块 multer模块
var multer = require('multer');
var storage = multer.diskStorage({
	//设置上传后文件路径，uploads文件夹会自动创建。
	destination: function(req, file, cb) {
        //基于app.js下读取uploads文件夹
		cb(null, './uploads')
	},
	//给上传文件重命名，获取添加后缀名
	filename: function(req, file, cb) {
		var fileFormat = (file.originalname).split(".");
		//给图片加上 时间戳 格式防止重名名
		//比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
		cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
	}
});
var upload = multer({
	storage: storage
});
//把上面的upload放到路由与回调函数之间
//意思，该路由upload可以接收前端名字为logo的文件,并且把图片放到upload文件夹里
//不能用get，要写post
router.post('/upload',upload.single('logo'),function(req,res,next){
    res.send({
        status:"success",
        file:req.file
    });
});

module.exports = router;