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
    //定义一个变量来存储回调函数
    //由于回调函数可能有多个，所以我们使用数组来存储回调函数
    #callbacks = []
    constructor(executor) {
        // 接收一个执行器作为参数
        executor(this.#resolve.bind(this), this.#reject.bind(this)) //调用回调函数
    }

    //这种方式属性添加到原型中
    //私有的resolve()用来存储成功的数据
    #resolve(value) {
        //禁止值被重复修改
        //如果state不等于0，说明值已经被修改 函数直接返回
        if (this.#state !== PROMISE_STATE.PENDING) return
        this.#result = value
        this.#state = PROMISE_STATE.FULFILLED//数据填充成功

        //当resolve执行时，说明数据已经进来了，需要调用then的回调函数
        // this.#callback && this.#callback(this.#result)//执行同步代码的时候, callback还没有赋值，所以没有回调函数
        queueMicrotask(() => {
            // this.#callback && this.#callback(this.#result)
            this.#callbacks.forEach(cb => {
                cb()
            })
        })
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
        if(this.#state === PROMISE_STATE.PENDING){
            //进入判断说明数据还没有进入Promise，将回调函数设置为callback的值
            // this.#callback = onFulfilled
            this.#callbacks.push(() => {
                onFulfilled(this.#result)
            })
        }else if(this.#state === PROMISE_STATE.FULFILLED){
            //数据为已经填充的状态才可读取
            /**
             * 目前来讲，then只能读取已经存储进Promise的数据，
             *  而不能读取异步存储的数据
             */
            // onFulfilled(this.#result)
            /**
             * then的回调函数，应该放入到微任务队列中执行，而不是直接调用
             */
            queueMicrotask(() => {
                onFulfilled(this.#result)//异步
            })
        }
    }

}

const mp = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('sunwukong')
    }, 1000)
})

// const mp = new MyPromise((resolve, reject) => {
//     resolve('sunwukong')
// })

mp.then(result => {
    console.log('读取数据1', result)
})
mp.then(result => {
    console.log('读取数据2', result)
})

mp.then(result => {
    console.log('读取数据3', result)
})