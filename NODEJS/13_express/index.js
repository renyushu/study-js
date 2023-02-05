const express = require("express")
const path = require("path")
const app = express()
const fs = require("fs/promises")
const cookieParser = require("cookie-parser")
const expressSession = require("express-session")
//导入路由模块
const userRouter = require("./routes/user")
// const studentRouter = require("./routes/student")

let STUDENT_ARR = require("./data/students.json")

// 将ejs设置为默认的模板引擎
app.set("view engine", "ejs")
// 配置模板的路径
app.set("views", path.resolve(__dirname, "views"))
// 配置静态资源路径
app.use(express.static(path.resolve(__dirname, "public")))
// 配置请求体解析
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
//设置session中间件
app.use(expressSession(
    {secret: "hello"}
))
//使路由生效
app.use("/user", userRouter) //user将会称为所有user模块接口的前缀 /user/list
// app.use(studentRouter)

//直接导入
app.use("/students", require("./routes/student"))

app.get("/set", (req, res) => {
    // console.log(req.session)
    req.session.username = "admin"
    res.send("查看session")
})

app.post("/login", (req, res) => {
    const {username, password} = req.body
    if(username === "admin" && password === "123123") {
        // 登录成功
        //保存用户信息到session中
        req.session.loginUser = username
        res.redirect("/students/list")
    }else{
        res.send("用户名或密码错误")
    }
})

app.get("/get", (req, res) => {
    const username = req.session.username
    console.log(username)
    res.send("读取session")
})

app.listen(3000, () => {
    console.log("服务器已经启动！")
})
