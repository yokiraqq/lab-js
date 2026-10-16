'use strict'

// 1
function random(min, max) {
    if (max === undefined) {
        max = min
        min = 0
    }
    const randomNumber = Math.random()
    const amount = max - min + 1
    const scaledNumber = amount * randomNumber
    const roundedNumber = Math.floor(scaledNumber)
    const result = min + roundedNumber
    return result
}
console.log(random(1,9))
console.log(random(4))

// 2

function generateKey(length, characters) {
    let key = ""
    for (let i = 0; i < length; i++){
        const symbol = random(0, characters.length-1)
        key += characters[symbol]
    }
    return key
}
const characters = "qwertyuiopasdfghjklzxcvbnm1234567890"
console.log(generateKey(16, characters))

// 3
function ipAdress(ip = "127.0.0.1") {
    const elements = ip.split(".")
    return elements.reduce(function(start, byte) {
        const number = Number(byte)
        return ((start << 8) | number)
    }, 0) >>> 0
    }
console.log(ipAdress())
console.log(ipAdress("10.0.0.1"))

// 4
function introspekcia(iface) {
    const massiv = []
    const keys = Object.keys(iface)
    for (let i = 0; i < keys.length; i++) {
        const name = keys[i]
        const fn = iface[name]
        if (typeof fn === 'function') {
            const count = fn.length
            massiv.push([name,count])
        }
    }
    return massiv
}
module.exports = {introspekcia}

