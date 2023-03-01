let sum = (a, b) => a + b

console.log(typeof sum)//function
console.log(sum(1, 3))//4


let obj = {
    sum: (a, b) => a + b
}

console.log(obj.sum(1, 1))//2