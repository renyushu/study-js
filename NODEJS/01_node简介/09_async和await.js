/*
通过async可以快速的创建异步函数

 */

// function fn() {
//     return Promise.resolve(10)
// }

/*
通过async可以快速的创建异步函数
    异步函数的返回值会自动化封装到一个Promise中返回
 */


function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000)
    })
}

/*
    Promise解决了异步调用中回调函数问题，
        虽然通过链式调用解决了回调地狱，但是链式调用太多以后还是不好看
        我多想以同步的方式去调用异步的代码
 */

// async function fn3() {
//     sum(123, 456)
//         .then(r => sum(r, 8))
//         .then(r => sum(r, 9))
//         .then(r => {
//             console.log(r)
//         })
//
//     //当我们通过await去调用异步函数时，它会暂停代码的运行
//     //直到异步代码执行有结果时，才会将结果返回
//     //注意 await只能用于 async声明的异步函数中，或es模块的顶级作用域中
//     //await不会影响到异步代码块意外的代码
//     //await阻塞的只是异步函数内部的代码
//     //通过await调用异步代码时，需要通过try-catch来处理异常
//     try{
//         let result = await sum(123, 456)//异步变同步,返回的是值
//         console.log('fn3', result)
//     }catch (e){
//         console.log("error...")
//     }
//
// }

// fn3()
// console.log(110)

//如果async声明的函数中没有写await，那么它里面的代码就会依次执行
// async function fn4() {
//     console.log(1)
//     console.log(2)
//     console.log(3)
//     console.log(4)
// }
//
// fn4()
// console.log(4)

// function fn5(){
//     return new Promise(resolve => {
//         //执行器的东西是立即执行的
//         //then才会进入微任务队列
//         //promise本身是同步的，then或await才是微任务
//         console.log(1)
//         console.log(2)
//         console.log(3)
//         resolve
//     })
// }
//
// console.log(4)//与以上代码等价


//demo2
async function f5() {
    console.log(1)
    /*
    当我们使用Await调用函数后，当前函数后边的所有代码
        会在当前函数执行完毕后，被放入到微任务队列中
     */
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('1')
            console.log(1)
        }, 2000)
    })
    console.log(3)
}

f5();
console.log(999);

//异步的立即执行函数
(async () => {
    await console.log('hhh')
})()