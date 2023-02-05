const express = require("express")
const fs = require("fs/promises")
const path = require("path")

let STUDENT_ARR = require("../data/students.json")

const router = express.Router()


//添加权限路由中间件
router.use((req, res, next) => {
    if(req.session.loginUser) {
        console.log('auth 中间件')
        next()
    }else{
        res.redirect("/")
    }
})

//学生列表的路由
router.get("/list", (req, res) => {
    console.log('/list ....')
    if(req.session.loginUser){
        res.render("students",  { stus: STUDENT_ARR, username:req.session.loginUser })
    }else{
        res.redirect("/")
    }
})

router.post("/add", (req, res, next) => {
    // 路由里要做什么？
    // 生成一个id
    const id = STUDENT_ARR.at(-1) ? STUDENT_ARR.at(-1).id + 1 : 1

    // 1.获取用户填写的信息
    const newUser = {
        id,
        name: req.body.name,
        age: +req.body.age,
        gender: req.body.gender,
        address: req.body.address
    }

    // 2. 验证用户信息（略）
    // 3. 将用户信息添加到数组中
    STUDENT_ARR.push(newUser)
    //调用next交由后续路由继续处理
    next()

})

//删除学生的路由

//处理存储文件的中间件
router.use((req, res) => {
    fs.writeFile(
        path.resolve(__dirname, "../data/students.json"),
        JSON.stringify(STUDENT_ARR)
    )
        .then(() => {
            // res.redirect() 用来发起请求重定向
            // 重定向的作用是告诉浏览器你向另外一个地址再发起一次请求

            res.redirect("/students/list")
        })
        .catch(() => {
            // ....
        })
})

module.exports = router