const numbers = require('./one').array;
const lodash = require('lodash')

const restarCero = lodash.without([5, 9, 10, 8, 9], 9)
console.log(restarCero)
