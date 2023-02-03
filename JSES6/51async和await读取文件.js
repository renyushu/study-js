//1.引入fs模块
const fs = require('fs');


//读取hello1
function readHello1() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/hello.txt', (err, data) => {
            //如果失败
            if (err) reject(err);
            //如果成功
            resolve(data);
        })
    })
}

function readHello2() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/hello2.txt', (err, data) => {
            //如果失败
            if (err) reject(err);
            //如果成功
            resolve(data);
        })
    })
}

function readHello3() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/hello3.txt', (err, data) => {
            //如果失败
            if (err) reject(err);
            //如果成功
            resolve(data);
        })
    })
}

//声明一个async函数
async function main() {
    //获取为学内容
    let hello1 = await readHello1();
    let hello2 = await readHello2();
    let hello3 = await readHello3();

    console.log(hello1.toString())
    console.log(hello2.toString())
    console.log(hello3.toString())

}

main()