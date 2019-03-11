let fs = require('fs');

/*
 * Node 事件循环
 * 1. Node 是单线程应用程序，但是通过事件和回调支持并发，所以性能非常高
 * 2. Node 是每一个API都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发
 * 3. Node 有很多内置事件，可以引入 Event模块，并通过实例化EventEmitter类来绑定和监听事件
 */

let events = require('events');

let EventEmitter = new events.EventEmitter();

getExt = () => {
    fs.readFile('08_ext.json', (err, data) => {
        // 将 data 广播出去
        EventEmitter.emit('data', data.toString());
    })
};

getExt();

// 监听data
EventEmitter.on('data', (ext) => {
    console.log(ext);
});

