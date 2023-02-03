//1.引入fs模块
const fs = require('fs');

//2.调用方法读取文件
// fs.readFile('./resources/hello.txt', (err, data) => {
//     //如果失败
//     if(err) throw err;
//     //如果成功
//     console.log(data);
// })

const p = new Promise(function (resolve, reject) {
    fs.readFile('./resources/hello.txt', (err, data) => {
        if (err) reject(err);
        //如果成功
        resolve(data);
    })
})

p.then(function (value) {
    console.log(value.toString())
}, function (reason) {
    console.error(reason)
})