let http = require('http');
let fs = require('fs');
let url = require('url');
let path = require('path');

http.createServer((req, res) => {
    // 获取响应路径
    let pathName = url.parse(req.url).pathname;

    if( pathName === '/'){
        pathName = 'index.html'
    }

    // 获取文件的后缀名
    let extName = path.extname(pathName);

    if(pathName !== '/favicon.ico'){
        // 获取08_Web_Service 下的 index.html
        fs.readFile('./08_WebService/' + pathName, (err, data) => {
            if(err){

                // 如果不存在这个文件

                console.log('404 Not Found!')
                fs.readFile('./08_WebService/404.html', (errorNotFound, dataNotFound) => {
                    if(errorNotFound){
                        console.log(errorNotFound)
                    } else {
                        res.writeHead(200, {
                            'Content-Type': 'text/html; charset="utf-8"'
                        });

                        // 读取写入文件
                        res.write(dataNotFound);
                        // 结束响应
                        res.end();
                    }
                });
                return;
            } else {

                // 返回这个文件

                let ext = getExt(extName);
                console.log(ext);

                // 设置请求头
                res.writeHead(200, {
                    'Content-Type': ext + '; charset="utf-8"'
                });

                // 读取写入文件
                res.write(data);
                // 结束响应
                res.end();
            }
        })
    }
}).listen(8080);

// 获取后缀名
getExt = (extName) => {
    // readFile 是异步操作， 所以需要使用readFileSync
    let data = fs.readFileSync('./08_ext.json');
    let ext = JSON.parse(data.toString());
    return ext[extName];
};
