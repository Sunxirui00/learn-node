var http = require('http');

var tools1 = require('./tool-add'); // 放在一个文件里
var tools2 = require('tool-multiply'); // 放在目录里
var tools3 = require('jsliang-module'); // 放在模块里，package.json里面要写明入口"main": "tools.js"

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=UTF-8'
    })
    res.write('<h1 style="text-align: center">Hello NodeJS</h1>')
    console.log(tools1.add(1, 2, 3));
    console.log(tools2.multiply(1, 2, 3, 4));
    console.log(tools3.multiply(1, 2, 3, 4, 5));

    /**
    * 这里请求了2次
    * http://localhost:3000/ 为一次
    * http://localhost:3000/favicon.ico 为第二次
    * */

    res.end();

}).listen(3000);
