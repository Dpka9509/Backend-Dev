function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('login')
            resolve()
        },2000)
    })
}

function userDetail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },1000)
    })
}


function user(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },4000)
    })
}

login().then(()=> {return userDetail()})
       .then(()=>{
        return user()
       }).then(()=>{
        console.log("all task done");
       })