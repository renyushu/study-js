const express = require("express")

//创建router对象
const router = express.Router()

//定义路由
router.get("/list", (req, res) => {
    res.send("hello 我是list")
})

//将router暴露到模块外
module.exports = router