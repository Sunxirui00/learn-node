/**
 * 1. fs.stat 检测是文件还是目录
 * 2. fs.mkdir 创建目录
 * 3. fs.writeFile 创建写入文件
 * 4. fs.appendFile 追加文件
 * 5. fs.readFile 读取文件
 * 6. fs.readdir 读取目录
 * 7. fs.rename 重命名
 * 8. fs.rmdir 删除目录
 * 9. fs.unlink 删除文件
 */

// 任务：
// 判断服务器上有没有 upload 目录，没有就创建这个目录
// 找出html目录下面的所有的目录，然后打印出来

let fs = require('fs');

fs.stat('upload', (err, stats) => {
    if(err){
        // 如果没有，创建
        fs.mkdir('upload', (error) => {
            if(error){
                console.log(error);
                return false
            } else {
                console.log('创建 upload 目录成功')
            }
        })
    } else {
        // 如果有 可以做更多的操作
        console.log(stats.isDirectory());
        console.log('有 upload 目录，你可以做更多的操作')
    }
});

fs.readdir('node_modules', (err, files) => {
    if(err){
        console.log(err);
        return false
    } else {
        console.log(files);

        let filesArr = [];

        (function getFile(i) {

            if(i === files.length){
                // 打印出所有目录
                console.log('目录： ');
                console.log(filesArr);
                return false
            }

            // 判断是目录还是文件夹
            fs.stat('node_modules/' + files[i], (error, stats) => {

                if(stats.isDirectory()){
                    filesArr.push(files[i])
                }

                getFile(i+1)
            })
        })(0)
    }
})
