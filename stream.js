var fs = require('fs');
var data = '';
var readerStream = fs.createReadStream('test.txt');

readerStream.setEncoding('UTF-8');

readerStream.on('data', function (chunk) {
    data += chunk;
});

readerStream.on('end', function (chunk) {
    console.log(data);
});

readerStream.on('error', function (err) {
   console.log(err.stack);
});

console.log('Program Ended');

// 从数据流中读取

var test = 'Sha Chou';

var writeStream = fs.createWriteStream('test1.txt');

writeStream.write(test, 'UTF-8');

writeStream.end();

writeStream.on('finish', function () {
    console.log('Write Finish')
});

writeStream.on('error', function (err) {
    console.log(err.stack)
});

console.log('Program ended');
