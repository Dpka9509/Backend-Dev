const fun=()=>{
    console.log("Hello");
};


//callback fn ki high priority hoti h 
function save(cb){
    console.log("Save function");
    cb();
}

save(fun);

let arr=[1,2,3,4,5];

// function printarr(element){
//     console.log(element);
// }

// arr.forEach(printarr);

arr.forEach((el)=>{
    console.log(el);
)};