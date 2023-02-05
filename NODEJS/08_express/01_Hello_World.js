/*
    express 是node中的服务器软件
        通过express可以宽恕的在node中搭建一个web服务器

    - 使用步骤：
        1. 创建并初始化项目
        2. 安装express
        3. 创建index.js并编写代码



 */

/*

    中间件

 */
//引入 express
const express = require("express")

//获取服务器程序的实例(对象）
const app = express()

/*
    如果希望服务器可以正常访问，则需要为服务器设置路由
        路由可以根据不同的请求方式和请求地址来处理用户请求

 */
app.get("/", (req, res) => {
    console.log("有人访问我了...")
    // 在路由中，应该做两件事
    //读取用户的请求(request)
    //根据用户的请求返回响应(response)
    // console.log(req)
    res.sendStatus(404)

})
//启动服务器
//app.listen（端口号)用来启动服务器
app.listen(3000, () => {
    console.log("服务器已经启动~")//服务器启动以后的会执行回调函数
})