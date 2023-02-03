/*
    所有的CommonJS的模块都会被包装到一个函数中功

    (function(exports, require, module, __filename, __dirname) {
        //模块代码会被放到这里

    });
 */

// (function(exports, require, module, __filename, __dirname) {
//     //模块代码会被放到这里
//     let a = 10
//     let b = 20
// });

let a = 10
let b = 2

// console.log(arguments)//证明的确是放到函数中执行的
console.log(__filename)
console.log(__dirname)

