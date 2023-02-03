const fs = require("node:fs/promises")
const path = require("node:path")

/*

    fs.readFile() 读取文件
    fs.appendFile() 创建新文件，或将数据添加到已有文件中
 */

fs.appendFile(
    path.resolve(__dirname, "./hello123.txt"),
    "超哥讲的真不错"
).then(r => {
    console.log(r)//没有返回值
    console.log("添加成功")
})