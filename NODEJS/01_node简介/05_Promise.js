
/*
静态方法

    Promise.resolve()创建一个立即完成的Promise
    Promise.reject() 创建一个立即拒绝的Promise


 */
// Promise.resolve(10).then(result => {
//     console.log(result)
// })
//
// Promise.reject('error').catch(reason => {
//     console.log(reason)
// })

function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000)
    })
}

/*
需求：
    我现在希望 sum(123, 456),sum(5, 6), sum(33,44) 这三个结果要么全部成功后返回，要么全部不返回。
    此时就可以使用Promise.all
 */

// Promise.all([
//     sum(123, 456),
//     sum(5,6),
//     Promise.reject('hhh'),
//     sum(33, 44)
// ]).then(r => {
//     console.log(r)//报错
// })

// Promise.allSettled([
//     sum(123, 456),
//     sum(5,6),
//     Promise.reject('hhh'),
//     sum(33, 44)
// ]).then(r => {
//     console.log(r)
// })

// Promise.race([
//     Promise.reject(222),
//     Promise.resolve(1),
//     sum(123, 456),
//     sum(5,6),
//     sum(33, 44)

// ]).then(r => {
//     console.log(r)
// }).catch(reason => {
//     console.log(reason)
// })

Promise.any([
    Promise.reject(222),
    Promise.reject(222),
    Promise.reject(222),
]).then(r => {
    console.log(r)
}).catch(reason => {
    console.log('error', reason)
})