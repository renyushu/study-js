// function f1(cb) {
//     console.log(cb)
//     cb()
// }
//
// function f1() {
//
// }

// f1(() => {
//     console.log("cb run ....")
// }


function Person(name, age) {
    this.name = name
    this.age = age
}

let arr = [
    new Person('jack', 1),
    new Person('jk', 18),
    new Person('tony', 88),
    new Person('rick', 28),
]


function cb(a) {
    return a.age > 9
}

function filter(arr, cb) {
    let newArr = []

    for(let i = 0; i < arr.length; i++) {
        /*
            我想过滤 > 88
                    > 2
                    > 3
                    > 4
                    ....
         */
        if(cb(arr[i])){
        // if(arr[i].age > 18){
            newArr.push(arr[i])
        }
    }
    return newArr
}

let nr = filter(arr, a => {
    return a.age > 8
})
console.log(nr)