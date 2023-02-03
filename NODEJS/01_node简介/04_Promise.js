

function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000)
    })
}
//
// sum(123, 234).then(result => {
//     console.log(result)
// })


/*
then/catch/finally返回的是一个新的Promise


 */

// const promise = new Promise((resolve, reject) => {
//     resolve('我是resolve返回的数据')
// })
//
// const p2 = promise.then(result => {
//     console.log('callback', result)
//     return 'hello world'
// })

// console.log(p2)

// setTimeout(() => {
//     console.log(p2)
// }, 1000)


/*
使用Promise的链式调用来解决回调地狱
 */

// sum(1, 4)
//     .then(result => result + 7)//返回的是一个新的Promise， 箭头函数的箭头后面是新的返回Promise的返回值
//     .then(result => result + 1)
//     .then(result => {
//         console.log(result)//13
//     })


const promise3 = new Promise((resolve, reject) => {
    reject('出错了')
})

promise3
    .then(r => 'hh')//此步骤会被忽略，因为没有返回正确的数据
    .catch(r => {
        console.log('异常处理', r)
        return '嘻嘻'
    })//这里调用了catch，并返回一个新的Promise
    .then(r => console.log('第二个then', r))//第二个then 嘻嘻

