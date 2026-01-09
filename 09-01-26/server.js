//fs module
//import fs module
const fs = require("fs");

// const read = (err,data) => {
//     if(err) throw err
//     console.log(data)
// }
console.log("first")




// fs.readFile('./log.txt','utf-8',(err,data) => {
//     if(err) throw err
//     console.log(data)
// })

// const data=fs.readFileSync("./log.txt", "utf-8");
// console.log(data);

// console.log("end")

const data="this is a new data";
fs.writeFileSync('./output.txt',data,(err)=>{
    if(err)throw err
    console.log("file write success")
})

// fs.appendFile('./output.txt',"\nthis is new text",(err)=>{
//     if(err)throw err;
//     console.log("text is added")
// })

console.log("end");

