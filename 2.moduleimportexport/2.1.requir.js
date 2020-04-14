const  getname = require('./2.module.js');
let fs = require('fs')
//console.log(fname);

let fullname = getname();
console.log(fullname)
fs.appendFileSync('text.txt',`\n${fullname}`)

