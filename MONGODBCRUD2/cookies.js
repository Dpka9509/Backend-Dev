//authentication -server verify krta h who are you and authorization - server verify krta h ki aapko kya access krna hai    ,or aap kon ho

//jwt-json web token - ek aisa token jo user ke credentials ko securely represent krta h, or usko verify krta h ki user valid h ya nahi

//cookies - small pieces of data stored on the client side, jo server ke dwara set kiye jate hain, or client ke dwara har request ke sath bheje jate hain
import express from "express";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const connectDb = async () => {
  console.log("DB Connected");
};

export default connectDb;

const app = express();

app.use(cookieParser("my-super-secret-key"));

app.get('/set-cookie', (req, res) => {

  let user={
    name:"rohan",
    email:"rohan09@gmail.com"
  };
  const token=jwt.sign(user,"qwertyuiop",{expiresIn:"1h"});
  console.log(token);
  res.cookie('name', 'rohan', { httpOnly: true });
  res.send("Cookie has been set!");
});

const authMiddleware=(req,res,next)=>{
  if(!req.cookies.name){
    res.send("invalid user")
    return;
  }
  next();
}

app.get("/dashboard",(req,res)=>{

})

app.get('/get-cookie',authMiddleware, (req, res) => {
  if (!req.cookies.name) {
    return res.send("invalid user");
  }
  const name = req.cookies.name;
  res.send(`cookie value: ${name}`);
});

app.get('/profile', authMiddleware, (req, res) => {
    const token = req.cookies.token;

    const decoded = jwt.verify(token, 'abcdef');
    console.log(decoded);
    // const name = req.cookies.name;

    res.send(`Welcome to your profile, ${decoded.name}!`);
});

app.get('/logout',authMiddleware,(req,res)=>{
  res.clearCookie("name");
  res.send("You have been logged out");
})

app.listen(3000, () => console.log("Server running on port 3000"));

