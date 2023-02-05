
//引入 express
const express = require("express")
//引入path
const path = require("path")

//获取服务器程序的实例(对象）
const app = express()


//设置static中间件，浏览器访问时，会自动去public目录下寻找对应的资源
app.use(express.static(path.resolve(__dirname, "./public")))

//解析请求体的中间件
//引入解析请求体的中间件
app.use(express.urlencoded())

//配置路由
//登录接口
// /login -> http://localhost:3000/login
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

app.post("/login", (req, res) => {
    console.log("post请求已经收到~~")
    //验证用户输入的用户名和密码是否正确
    //通过req.body来获取post请求的参数
    //默认情况下，express不会自动解析请求体，需要通过中间件来为其增加功能
    const username = req.body.user
    const password = req.body.password

    if(username === "admin" && passowrd === 'admin'){
        res.send("<h1>登录成功</h1>")
    }else {
        res.send("<h1>用户名和密码错误</h1>")
    }
})


//get请求发送参数的第二种方式
// /hello/:id 表示当用户访问 /hello/xxx 时就会触发
// 在路径中以冒号命名的部分我们称为param, 在get请求他可以被解析为请求参数
app.get("/hello/:id", (req, res) => {
    //可以通过req.params获取
    console.log(req.params)
    res.send("<h1>这是hello路由</h1>")
})

//启动服务器
app.listen(3000, () => {
    console.log("服务器已经启动~")
})