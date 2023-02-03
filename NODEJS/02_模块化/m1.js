let a = 10
let b = 20

console.log("我是m1模块～～")

/*
    在定义模块时，模块中的内容是不能被外部看到的
        可以通过exports来设置向外部暴露的内容

   访问exports的方式有两种
        - exports
        - module.exports
       当我们在其他模块中引入当前模块时，require函数返回的就是exports
       可以将希望暴露给外部模块的内容设置为exports的属性



 */

console.log(exports === module.exports)
console.log(exports)
console.log(module.exports)


//可以通过exports一个一个的导出值
// exports.a = "sunwukong"
// exports.b = "zhubajie"
// exports.c = "tans"


//可以通过module.exports同时导出多个值
module.exports = {
    a: "hhh",
    b: [1, 3, 4, 5],
    c: () => {
        console.log(111)
    }
}