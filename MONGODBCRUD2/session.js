import session from "express-session";
import express from "express"

const app=express();
const PORT=process.env.PORT|| 3000;
app.use(express.json());

//enable session

app.use(
  session({
    secret:"mysecretkey",
    resave:false,
    saveUninitialized:false,
    cookie:{
      maxAge:1000*60*5,
    },
  })
);

app.get("/login",(req,res)=>{
    let userInfo={
        id:1,
        name:"khushboo"
    }

    req.session.user=userInfo;
    res.send("user logged in");
})

app.get("/profile",(req,res)=>{
    if(req.session.user){
        res.send(`welcome ,${req.session.user.name}`);
    }else{
        res.status(401).send("Unauthorized")
    }
})

app.get("/logout",(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            return res.status(500).send("Could not logout")
        }
        res.send("User logged out");
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})