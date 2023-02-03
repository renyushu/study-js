//1.引入fs模块
const fs = require('fs');

//使用Promise读取多个文件
const p = new Promise(function (resolve, reject) {
    fs.readFile('./resources/hello.txt', (err, data) => {
        if (err) reject(err);
        //如果成功
        resolve(data);
    })
})

p.then(value => {
    return new Promise((resolve, reject) => {
        //读取第二个文件
        fs.readFile('./resources/hello2.txt', (err, data) => {
            resolve([value, data]);
        })
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/hello3.txt', (err, data) => {
            value.push(data);
            resolve(value);
        })
    })
}).then(value => {
    console.log(value.join('\r\n'));
})

