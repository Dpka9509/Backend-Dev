const  http=require('http');
const fs=require('fs');

// fs.readFile('./log.txt','utf8',(err,data)=>{
//     console.log(data);
// })

// const readStream=fs.createReadStream("./log.txt",{
//     highWaterMark: 64*1024
// });

// readStream.on("data",(chunk)=>{
//     console.log(chunk.toString());
// })

// appending (it will overwrite same text again i.e add 3 more lines)
// const writeStream=fs.createWriteStream('info.txt',{
//     flags:"a"
// })

// write
const writeStream=fs.createWriteStream('info.txt')
writeStream.write("\nThis is some text")
writeStream.write("\nThis is some text")
writeStream.write("\nThis is some text")
writeStream.end()

writeStream.on("finish",()=>{
    console.log("writing finish");
})

