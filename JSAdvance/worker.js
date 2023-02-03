function fib(n){
    return n <= 2 ? 1 : fib(n-1) + fib(n-2)//递归调用
}
var onmessage = function (event) {
    var number = event.data
    console.log('分线程接收到主线程发送的数据：'+number)
    //计算
    var result = fib(number)
    postMessage(result)
    console.log('分线程向主线成返回数据：'+result)

}