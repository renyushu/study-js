//开启了一个定时器
//定时器的作用是间隔一段时间后，将函数放入到任务队列中
// setTimeout(() => {
//     console.log(1)
// }, 0)
//


/*
Promise的执行原理
    - Promise在执行，then就相当于给Promise了回调函数
        当Promise的状态从pending变为fulfilled时，
        then的回调函数会被放入到任务队列中
 */

// Promise.resolve(1).then(() => {
//     console.log(2)
// })



/*
queueMicrotask() 用来向微任务中添加一个任务

 */

setTimeout(() => {
    console.log(1)
})

queueMicrotask(() => {
    console.log(2)
})

console.log(3)
