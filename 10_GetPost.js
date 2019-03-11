let http = require('http');
// 虚拟数据
var items = [];

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');

    switch (req.method) {

        // post 请求时，浏览器会先发一次options请求，如果请求通过，则继续发送正式的post请求。
        case 'OPTIONS':
            res.statusCode = 200;
            res.end();
            break;
        case 'GET':
            let data = JSON.stringify(items);
            res.write(data);
            res.end();
            break;
        case 'POST':
            let item = '';
            req.on('data',(chunk) => {
                item += chunk;
            });
            // 数据发送完毕
            req.on('end', ()=>{
                item = JSON.parse(item);
                items.push(item.item);
                let data = JSON.stringify(items);
                res.write(data);
                res.end()
            });
            break
    }
}).listen(3000);

console.log('http server is start...');
