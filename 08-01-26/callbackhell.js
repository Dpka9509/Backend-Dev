console.log("start");

//callback fn k expire hone ka wait krega uss s phle fir jb voh complete ho jayega tbhi aage chlega
function login(cb){
    setTimeout(()=>{
        console.log("login");
        cb();
    },2000);
}


function userDetail(){
    setTimeout(()=>{
        console.log("userdetail");
    },1000);
};

login(userDetail);