const express = require("express")
//引入jwt
const jwt = require("jsonwebtoken")
const app = express()

const STU_ARR = [
    {id: "1", name: 'rick', age: 18, gender: "男", address: "花果山"},
    {id: "2", name: 'jack', age: 28, gender: "男", address: "花果山"},
    {id: "3", name: 'mark', age: 98, gender: "男", address: "花果山"},
]

//引入中间件
app.use(express.urlencoded({extended: true}))
//解析json格式的中间件
app.use(express.json())

//跨域设置
app.use((req, res, next) => {
    //设置响应头
    res.setHeader("Access-Control-Allow-Origin", "*")//允许发送的ip地址
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS")//允许发送的请求类型
    res.setHeader("Access-Control-Allow-Headers", "Content-type, Authorization")
    next()
})

//定义一个登录的路由
app.post("/login", (req, res) => {
    //获取用户输入的用户名和密码
    const {username, password} = req.body
    //验证用户名和密码
    if(username === "admin" && password === "123123"){
        //登录成功,生成token
        const token = jwt.sign({
            id: "12345", username: "admin", nickname: "超级管理员"
        }, "chaojianquanmima", {
            expiresIn: "1d"
        })
        res.send({
            status: "ok",
            data: {
                token,
                nickname: "超级管理员"
            }
        })
    }else{
        //登录失败
        res.status(403).send({
            status: "error",
            data: "用户名或密码错误"
        })
    }

})

//定义学生信息的路由
app.get("/students", (req, res) => {
    //设置响应头
    // res.setHeader("Access-Control-Allow-Origin", "*")
    console.log("收到students的get请求")
    //读取请求头
    const token = req.get("Authorization").split(" ")[1]
    //对token进行解码
    try{
        const decodeToken = jwt.verify(token, "chaojianquanmima")
        console.log(decodeToken)
        //token有效
        //返回学生信息
        res.send({
            status: "ok",
            data: STU_ARR
        })

    } catch (e){
        console.log(e)
        //token无效
        res.status(403).send({
            status: "error",
            data: {
                msg: "token无效"
            }
        })
    }


})

//查询某个学生的路由
app.get("/students/:id", (req, res) => {
    const id = req.params.id
    const stu = STU_ARR.find(item => item.id === id)
    //将数据返回
    res.send({
        status: "ok",
        data: stu
    })
})


// 定义一个添加学生的路由
app.post("/students", (req, res) => {
    console.log("收到students的post请求", req.body)
    // 获取学生的信息
    const {name, age, gender, address} = req.body

    console.log(+req.body.age, typeof +req.body.age)
    // 将学生信息添加到数组
    STU_ARR.push({
        id: +STU_ARR.at(-1).id + 1 + "",
        name,
        age:+age,
        gender,
        address
    })

    // 添加成功
    res.send({
        status: "ok",
        data: STU_ARR
    })
})

//定义删除一个学生的路由
app.delete("/students/:id", (req, res) => {
    // 获取学生的id
    const id = req.params.id

    // 遍历数组
    for (let i = 0; i < STU_ARR.length; i++) {
        if (STU_ARR[i].id === id) {
            const delStu = STU_ARR[i]
            STU_ARR.splice(i, 1)
            // 数据删除成功
            res.send({
                status: "ok",
                data: delStu
            })
            return
        }
    }

    // 如果执行到这里，说明学生不存在
    res.status(403).send({
        status: "error",
        data: "学生id不存在"
    })
})

app.listen(3000, () => {
    console.log("服务器已经启动！")
})