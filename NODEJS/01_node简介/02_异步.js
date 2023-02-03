function sum(a, b, cb) {
    setTimeout(() => {
        cb(a + b);
    }, 10000)
}

console.log(1111)
var result = sum(1, 2, (res) => {
    console.log(res)
})
console.log(2222)
