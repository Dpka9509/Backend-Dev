function managefiles(){

const fs = require("fs");
//readLogFile
const data = fs.readFileSync('./log.txt','utf-8')
console.log(data)
console.log("first")

//writelogfile
const dataToWrite = "this is a new data"
fs.writeFile('./output.txt',dataToWrite,(err) => {
    if(err) throw err
    console.log("file written successfully")
});
//appendlogFile
fs.appendFile('./output.txt',"\n this is appended data",(err) => {
    if(err) throw err
    console.log("file appended successfully")
});

//delete log file
fs.unlinkSync('./output.txt')
console.log("last")

}

module.exports={managefiles};