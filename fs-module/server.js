//fs module
//import fs module
const fs = require("fs");
// const read = (err,data) => {
//     if(err) throw err
//     console.log(data)
// }
// console.log("first")
// fs.readFile('./log.txt','utf-8',(err,data) => {
//     if(err) throw err
//     console.log(data)
// })

// const data=fs.readFileSync("./log.txt", "utf-8");
// console.log(data);

// console.log("end")

// const data="this is a new data";
// fs.writeFileSync('./output.txt',data,(err)=>{
//     if(err)throw err
//     console.log("file write success")
// })

// fs.appendFile('./output.txt',"\nthis is new text",(err)=>{
//     if(err)throw err;
//     console.log("text is added")
// })

// console.log("end");

const path = require("path");

// const absolutePath = path.resolve("log.txt");
// console.log(absolutePath);

// console.log(__dirname);

// console.log(path.basename("./notes/log.txt"));

// const joinPath = path.join(__dirname, "notes", "log.txt");
// console.log(joinPath);

// const pathParse=path.parse(joinPath);
// console.log(pathParse);

// const filePath = path.join(__dirname, "log", "log.txt");
// const data = fs.readFileSync(filePath, "utf-8");
// console.log(data);