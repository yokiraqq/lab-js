'use strict';


function inc1 (n) {
    return ++n;
}
const a = 5;
const b = inc1(a) 
console.dir({a, b})



function inc2 (num) {
    num.n++
}
const obj = { n:5 }
inc2(obj);
console.dir(obj)


const massiv = [8, false, 'js', 'lab', 9, true, false, 'laba', 2, -2, true, 'home', 5, true, 1, 'friday', false, 89, 'help']

const hash1 = { number:0, string:0, boolean:0}
for (const element1  of massiv) {
    const type1 = typeof element1
    if (type1 in hash1) {
        hash1[type1]++
    }
}
console.dir(hash1)

const hash2 = {}
for (const element2 of massiv) {
    const type2 = typeof element2;
    if (!(type2 in hash2)) {
        hash2[type2] =0
    }
    hash2[type2]++
}
console.dir(hash2)
