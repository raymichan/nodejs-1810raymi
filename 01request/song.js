var request = require('request');
var fs = require('fs');
request('http://fs.w.kugou.com/201902272003/b0a01b1d8fecdee64b85ef32658194e3/G132/M04/1C/0B/ZJQEAFtVvnOAbAsPAER4484PSFI613.mp3').pipe(fs.createWriteStream('吴青峰、陈粒 - 空舞.mp3'))