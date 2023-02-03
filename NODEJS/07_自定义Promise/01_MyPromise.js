/*
    定义类的思路
        1.分析需求
 */
const PROMISE_STATE = {
    PENDING: 0,
    FULFILLED: 1,
    REJECTED: 2
}
class MyPromise {
    //定义一个变量，用来存储数据
    #result
    //定义一个变量记录Promise的状态
    #state = PROMISE_STATE.PENDING // pending 0 fulfilled 1 rejected 2
    constructor(executor) {
        // 接收一个执行器作为参数
        executor(this.#resolve.bind(this), this.#reject.bind(this)) //调用回调函数
    }

    //这种方式属性添加到原型中
    //私有的resolve()用来存储成功的数据
    #resolve(value) {
        // console.log("resolve被调用了, value值是: ", value)
        // console.log(this)
        //禁止值被重复修改
        //如果state不等于0，说明值已经被修改 函数直接返回
        if (this.#state !== PROMISE_STATE.PENDING) return
        this.#result = value
        this.#state = PROMISE_STATE.FULFILLED//数据填充成功
        // console.log(this.#result)
    }

    //因为this指向的问题，所以使用resolve
    //这种方式添加到对象中
    //     #resolve = (value) => {
    //         this.#result = value
    // }
    //私有的reject()用来存储拒绝的数据
    #reject(reason) {

    }

    //添加一个用来读数据的then方法
    then(onFulfilled, onRejected){
        //数据为已经填充的状态才可读取
        if(this.#state === PROMISE_STATE.FULFILLED){
            onFulfilled(this.#result)
        }
    }

}

const mp = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('sunwukong')
    }, 1000)
})
mp.then(result => {
    console.log(result)
})
// console.log(mp)

