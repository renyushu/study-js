/*
    package1.json
        - package.json是包的描述文件
        - node中通过该文件对项目进行描述
        - 每一个node项目必须有package.json

    命令
        npm init 初始化项目，创建package.json
        npm init -y 初始化项目，创建package.json(所有值都采用默认值)
        npm install 报名 将指定包下载到当前项目中
            install发生了什么？
                1.将包下载到当前项目的node_modules目录下
                2.会在package.json的dependencies属性中添加一个新属性
                        "lodash": "^4.17.21"
                3.会自动添加package-lock.json文件

        npm install 会自动安装所有以来(根据package.json中的dependencies

        npm install 包名 -g 全局安装
            - 全局安装时将包安装到计算机中
            - 全局安装的通常都是一些工具

        npm uninstalll 包名 卸载


 */

/*
    引入从npm下载的包时，不需要书写路径，直接写包名即可
 */

const _ = require("lodash")
console.log(_)