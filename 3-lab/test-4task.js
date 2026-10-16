'use strict';

const {introspekcia} = require("./3-lab.js")
const testObj = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
}
const result = introspekcia(testObj)
console.log(JSON.stringify(result))