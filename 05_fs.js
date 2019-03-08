let fs = require('fs');

/*
 * fs.stat 检查是文件还是目录
 * fs.mkdir
 * fs.readdir
 * fs.rmdir
 * fs.writeFile
 * fs.appendFile
 * fs.readFile
 * fs.rename
 * fs.unlink
 */

fs.stat('index.js', (error, stats) => {
    if(error){
        console.log(error);
        return false
    } else {
        console.log(stats);
        console.log(`文件 ${stats.isFile()}`);
        console.log(`目录 ${stats.isDirectory()}`);
        return false
    }
});

// 创建文件夹
// path - 将创建的目录路径
// mode - 目录权限（读写权限），默认 0777
// callback - 回调，传递异常参数 err
// fs.mkdir('css', (err) => {
//     if(err){
//         console.log(err);
//         return false
//     } else {
//         console.log('创建目录成功')
//     }
// });

// 删除文件夹
// path - 将删除的目录路径
// mode - 目录权限（读写权限），默认 0777
// callback - 回调，传递异常参数 err
// fs.rmdir('css', (err) => {
//     if(err){
//         console.log(err);
//         return false
//     } else {
//         console.log('删除目录成功')
//     }
// })
/*
 * 写入文件  存在即覆盖，不存在即创建。
 * filename - 文件名称
 * data (String | Buffer) 将要写入的内容，可以是字符串或者Buffer 数据
 * * encoding (String) 可选。 默认'utf-8'，当data是buffer时，该值应该为 ignored。
 * * flag (String) 默认值‘w’
 */
/*fs.writeFile('index.js', 'Hello node', (err) => {
    if(err){
        console.log(err);
        return false
    } else {
        console.log('写入成功')
    }
});*/
/*
 * 追加文件
 * filename - 文件名称
 * data (String | Buffer) 将要写入的内容，可以是字符串或者Buffer 数据
 * * encoding (String) 可选。 默认'utf-8'，当data是buffer时，该值应该为 ignored。
 * * flag (String) 默认值‘w’
 */
/*fs.appendFile('index.js', 'Hello,这是追加的内容', (err) => {
    if(err){
        console.log(err);
        return false
    } else {
        console.log('追加成功')
    }
});*/

/*
 * 读取文件
 * filename - 文件名称
 */
/*fs.readFile('index.js', (err, data) => {
    if(err){
        console.log(err);
        return false
    } else {
        console.log('读取文件成功');
        console.log(data);
    }
});*/

/*
 * 读取文件
 */
/*fs.readdir('node_modules', (err, data) => {
    if(err){
        console.log(err);
        return false
    } else {
        console.log('读取目录成功');
        console.log(data);
    }
});*/

/*
 * 重命名, 可以裁切噢！
 */
fs.rename('chou.js', 'node_modules/chou.js', (err) => {
    if(err){
        console.log(err);
        return false
    } else {
        console.log('重命名成功');
    }
});
