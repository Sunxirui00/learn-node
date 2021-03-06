// 假设我们文件其中有个工具模块
var tools = {
    add: (...numbers) => {
        let sum = 0;
        for (let number in numbers) {
            sum += numbers[number]
        }
        return sum;
    }
};

// 暴露模块
module.exports = tools;

