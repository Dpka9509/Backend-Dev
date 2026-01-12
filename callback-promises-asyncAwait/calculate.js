// const { add, sub, multiply, divide } = require('./calc');
// add(5,7);
// sub(90,62);
// multiply(5,5);
// divide(8,2);
const os=require('os');

console.log(os.arch());
console.log(os.freemem()/1024**3);
console.log(os.uptime());
console.log(os.totalmem());