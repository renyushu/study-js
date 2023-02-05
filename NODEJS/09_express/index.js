const express = require("express")
const path = require("path")
const app = express()

// 设置模版引擎
app.set("view engine", "ejs")
//设置模块路径
app.set("views", path.resolve(__dirname, "views"))
//配置静态资源路径
app.use(express.static(path.resolve(__dirname, "public")))

//配置解析请求体解析
app.use(express.urlencoded({extended: true}))


app.get("/hello", (req, res) => {
    res.send("hello")
})

//
app.get("/students", (req, res) => {

    //返回模版
    //res.renden()用来渲染一个模版引擎，并将其返回给浏览器
    //可以将一个对象作为render的第二个参数传递，这样在模版中可以反问道对象中的数据
    res.render("students", {name: "swk", age: 18})
    // res.render("students")
})


//可以在所有的路由的后边配置错误路由
app.use((req, res) => {
    //只要这个中间件一执行，说明上边的地址都没有匹配
    res.status(404)
    res.send("您访问的地址已被外星人劫持～")

})
app.listen(3000, () => {
    console.log("服务器已经启动~")
})
