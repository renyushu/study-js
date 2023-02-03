// function sum(a, b) {
//     return a + b
// }
//
// const result = sum(123, 456)
// console.log(result)

/*
function sum(a, b, callback) {
    callback(a + b)//通过回调函数返回计算结果
}

const result = sum(123, 456, result => {
    console.log(result)
})
*/

//创建Promise
//创建Promise， 构造函数中需要一个函数作为参数
//Promise构造函数的回调函数，它会在创建Promise时调用，调用时会有两个参数传递进去
const promise = new Promise( (resolve, reject) => {
    //resolve和reject是两个函数，通过这两个函数可以向Promise中存储数据
    //resolve在执行正常时存储数据, reject在执行错误时存储数据
    // resolve("哈哈哈")
    // reject('出错了')
    // //通过函数来向Promise中添加数据，好处就是可以用来添加异步调用的数据
    // setTimeout(() => {
    //     resolve('我是异步调用的数据')
    // }, 2000)

    // throw new Error("嘿嘿，出错了")
})

setTimeout(() => {
    console.log(promise);
}, 3000)

/**
 * 从Promise中读取数据
 *  - 可以通过Promise的实例方法then来读取Promise中存储的数据
 *  - then需要两个回调函数作为参数，回调函数用来获取Proimise中的数据
 *      通过resolve存储的数据，回调用第一个函数返回
 *          可以在第一个函数中编写处理数据的代码
 *      通过reject存储的数据或者出现异常时，回调用第二个函数返回
 *          可以在第二个函数中编写处理异常的代码

 */
promise.then((result) => {
    console.log(1, result)
}, (reason) => {
    console.log(2, reason)
})

/**
 * Promise中维护了两个隐含的属性
 *  PromiseResult
 *      - 用来存储数据
 *
 *  PromiseState
 *      - 记录Promise的状态（三种状态）
 *          pending （进行中）
 *          fulfilled (完成)
 *          rejected(拒绝，出错了)
 *       - state只能修改一次，修改以后永远不会在变
 *
     * - 流程
     *      当Promise创建时，PromiseState初始值为pending,
     *          当通过resolve存储数据时 PromiseState 变为 fulfilled(完成)
     *              PromiseResult变为存储的数据
     *          当通过reject存储数据或出错时 PromiseState 变为 rejected(拒绝，出错了)
     *              PromiseResult变为存储的数据 或 异常对象
     *
     *      当我们通过then读取数据时，相当于为Promise设置了回调函数，
     *          如果PromiseState变为fulfilled, 则调用then的第一个回调函数来返回数据
     *          如果PromiseState变为rejected,, 则调用then的第二个回调函数来返回数据
 */

/*
catch()用户和then蕾丝，但是只需要一个回调函数作为参数
    catch()中的回调函数只会在Promise被拒绝时才调用
    catch() 相当于 then(null, reason => {})
    catch() 就是一个专门处理Promise异常的方法
 */

//Promise.resolve()作用同以下代码
const promise2 = new Promise((resolve, reject) => {
    // resolve('hhh')
    reject('error')
})

promise2.catch(reason => {
    console.log(reason)
})