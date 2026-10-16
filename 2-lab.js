'use strict'

// 1
let userName = "Vika"

// 2
const birthYear = 2008

// 3
function privitannya() {
    console.log("Привіт, " + userName);
}
privitannya()

// 4
function range(start, end) {
    const massiv = []
    for (let i = start; i <= end; i++) {
        massiv.push(i)
    }
    return massiv
}
console.log(range(15,30))

// 5
function rangeOdd(start, end) {
    if (start % 2 === 0) {
        start++
    }
    const massiv = []
    for (let n = start; n <= end; n = n + 2) {
        massiv.push(n)
    }
    return massiv
}
console.log(rangeOdd(15,30))

// 6
function average(a,b) {
    const c = (a+b)/2
    return c
}
function square(x){
    x=x*x
    return x
}
function cube(x){
    x=x*x*x
    return x
}
function calculate(){
    const canculated = []
    for (let i of range(0,9)){
        square(i)
        cube(i)
        canculated.push(average(square(i),cube(i)))
    }
    return canculated
}
console.log(calculate())

// 7
function fn() {
    const obj1 = { name: 'Vika' }
    let obj2 = { name: 'neVika' }
    obj1.name = 'Vika2'
    obj2.name = 'neVika2'
    console.log(obj1.name)
    console.log(obj2.name)
    // obj1 = { name: 'Vika3' } оbj1 константа, тому дає помилку
    obj2 = { name: 'neVika3' }
    console.log(obj1)
    console.log(obj2)
}
fn()

// 8
function createUser(name, city) {
    let user = { 
        name: name,
        city: city
    }
    return user
}
console.log(createUser("Vika Ivanko", "Brovary"))

// 9
const number = [
    {name: "Marcus Aurelius", phone: "+123456789"},
    {name: "Vika Ivanko", phone: "+987654321"},
    {name: "neVika neIvanko", phone: "+321987465"}
]
function findPhoneByName(name) {
    for (const i of number) {
        if (i.name === name) {
            return i.phone
        }
    }
}
console.log(findPhoneByName("Vika Ivanko"))

// 10
const hash = {
    "Marcus Aurelius": "+123456789",
    "Vika Ivanko": "+987654321",
    "neVika neIvanko": "+321987465"
}
function findPhoneByName2(name) {
    return hash[name]
}
console.log(findPhoneByName2("neVika neIvanko"))


