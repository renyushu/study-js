
//引入 express
const express = require("express")
//引入path
const path = require("path")

//获取服务器程序的实例(对象）
const app = express()


//设置static中间件，浏览器访问时，会自动去public目录下寻找对应的资源
app.use(express.static(path.resolve(__dirname, "./public")))

//配置路由
app.get("/hello", (req, res) => {
    /*
        希望用户返回根目录时，可以给用户返回一个网页

     */
    res.send("这是hello路由哈哈哈")
})

//登录接口
app.get("/login", (req, res) => {
    //获取到用户名和密码
    const username = req.query.usern
    console.log(username)
    console.log(req.query)
    console.log("请求已经收到~~")
    //验证用户输入的用户名和密码是否正确
    if(req.query.usern === "admin" && req.query.passowrd === 'admin'){
        res.send("<h1>登录成功</h1>")
    }else {
        res.send("<h1>用户名和密码错误</h1>")
    }
})

//启动服务器
app.listen(3000, () => {
    console.log("服务器已经启动~")
})