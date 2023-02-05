const express = require("express")
const path = require("path")
const app = express()
const fs = require("fs/promises")
const cookieParser = require("cookie-parser")
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
//使路由生效
app.use("/user", userRouter) //user将会称为所有user模块接口的前缀 /user/list
// app.use(studentRouter)

//直接导入
app.use("/students", require("./routes/student"))

app.get("/", (req, res) => {
    res.render("login")
})

app.get("/cookie", (req, res) => {
    //给客户端发送一个cookie
    res.cookie("username", "admin")
    res.send("cookie已经发送")
})

app.get("/hello", (req, res) => {
    /*
        需要安装中间件使得express可以解析cookie
            1.安装cookie-parser
     */
    //req.cookie用来读取客户端发回的cookie
    console.log(req.cookies)
    res.send("hello 路由")
})

app.get("/set", (req, res) => {
    res.cookie("name", "sunwukong", {
        expires: new Date(2023, 4, 4)//设置过期时间
    })
    res.send("设置cookie")
})

//读取cookie
app.get("/get", (req, res) => {
    const name = req.cookies.name
    console.log(name)
    res.send("读取cookie")
})

app.get("/delete-cookie", (req, res) => {
    //cookie一旦发送给浏览器我们就不能在修改了
    //但是我们可以通过发送同名cookie来替换旧的，从而达到修改的目的
    res.cookie("name", "", {
        maxAge: 0
    })

    res.send("删除cookie")

})

app.post("/login", (req, res) => {
    const {username, password} = req.body
    if(username === "admin" && password === "123123") {
        // 登录成功
        res.cookie("username", username)
        res.redirect("/students/list")
    }else{
        res.send("用户名或密码错误")
    }
})
app.listen(3000, () => {
    console.log("服务器已经启动！")
})
