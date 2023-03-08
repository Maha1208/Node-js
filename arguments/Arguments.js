// const args= process.argv.slice();
// console.log(args); //arg1,arg2,arg3

const args1 = require('minimist')(process.argv.slice(2))
console.log(args1['name'])
