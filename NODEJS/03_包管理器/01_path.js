/*
path
    - 表示的路径
    - 通过path可以获取各种路径
    - 需要使用path, 需要先对其进行引入
    - 方法：
        path.resolve([...paths])

        注意：我们通过不同的方式执行代码时，它的工作目录是会发生变化的


 */

const path = require("node:path")

// const result = path.resolve()//直接调用返回工作目录

//最终形态
//以后使用路径时，尽量通过path.resolve来生成路径
const result = path.resolve(__dirname, "./hello.js")//确保路径是正确的；__dirname: 当前文件所在的目录
console.log(result)


/*
    fs
        - fs用来帮助node操作磁盘中的文件
        - 文件操作也就所谓的I/O
        - 需要引入
 */

const fs = require("node:fs")
//当我们通过fs模块读取磁盘中的数据时，读取到的数据总会以Buffer对象的形式返回
//Buffer 缓存区 是一个临时用来存储数据的缓冲区
const bf = fs.readFileSync(path.resolve(__dirname, "./hello.txt"))//使用相对路径不安全，因为工作目录可能会改变
console.log(bf.toString())

//同步调用方式
fs.readFile(
    path.resolve(__dirname, "./hello.txt"),
    (err, buffer) => {
        if (err){
            console.log("出错了")
        } else {
            console.log(buffer.toString())
        }
    }
)

/*
    Promise版本fs的方法
 */

const fsp = require("node:fs/promises")

fsp.readFile(path.resolve(__dirname, "./hello.txt"))
    .then(buffer => {
        console.log(buffer.toString())
    }).catch(e => {
        console.log("出错了")
})

(async () => {
   try{
       const buffer = await fs.readFile(path.resolve(__dirname, "./hello.txt"))
       console.log(buffer.toString())
   }catch(e){
       console.log("出错了")
   }
})

