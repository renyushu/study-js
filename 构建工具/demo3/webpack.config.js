const path = require("path")
//引入html插件
const HTMLPlugin = require("html-webpack-plugin")


module.exports = {
    mode: "development", //设置打包的模式，production表示生产模式
    // entry: "./hello/hello.js", //用来指定打包时的主文件 默认：./src/01_Hello_World.js
    output: {
        //表示打包后的文件输出到hello目录
        // path: path.resolve(__dirname, "hello"), //指定打包的目录，必须要绝对路径;
        // filename: "bundle.js",//打包后的文件名
        clean: true,//是否自动清空dist(打包)目录
    },// 配置代码打包后的地址

    module: {
        rules: [
            {
                test: /\.css$/i, //css文件匹配规则
                use: ["style-loader", "css-loader"]//样式引入loader css加载loader
            },
            {
                test:/\.(jpeg)|(png)|(jpg)|(gif)$/i,
                type: "asset/resource" //图片的loader; 图片直接资源类型的数据，可以通过指定type来处理
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HTMLPlugin({
            title: "hello webpack"
        })
    ],

    devtool: "inline-source-map"
}

