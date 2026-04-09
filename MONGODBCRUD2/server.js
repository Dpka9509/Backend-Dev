import connectDb from "./config/db.js"
import dotenv from "dotenv"
import express from 'express'
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js"
const app = express()
const PORT = process.env.PORT || 5000;

dotenv.config();
connectDb()
app.use(express.json())
app.use('/api',userRoutes)
app.use("/api/auth",authRoutes)
app.listen(PORT,()=>{
    console.log("server is running on port",PORT)
})


//jwt- cookies 
// import express from "express";
// import cookieParser from "cookie-parser";
// import jwt from "jsonwebtoken";

// const connectDb = async () => {
//   console.log("DB Connected");
// };

// export default connectDb;

// const app = express();

// app.use(cookieParser("my-super-secret-key"));

// app.get('/set-cookie', (req, res) => {

//   let user={
//     name:"rohan",
//     email:"rohan09@gmail.com"
//   };
//   const token=jwt.sign(user,"qwertyuiop",{expiresIn:"1h"});
//   console.log(token);
//   res.cookie('name', 'rohan', { httpOnly: true });
//   res.send("Cookie has been set!");
// });

// const authMiddleware=(req,res,next)=>{
//   if(!req.cookies.name){
//     res.send("invalid user")
//     return;
//   }
//   next();
// }

// app.get("/dashboard",(req,res)=>{

// })

// app.get('/get-cookie',authMiddleware, (req, res) => {
//   if (!req.cookies.name) {
//     return res.send("invalid user");
//   }
//   const name = req.cookies.name;
//   res.send(`cookie value: ${name}`);
// });

// app.get('/profile', authMiddleware, (req, res) => {
//     const token = req.cookies.token;

//     const decoded = jwt.verify(token, 'abcdef');
//     console.log(decoded);
//     // const name = req.cookies.name;

//     res.send(`Welcome to your profile, ${decoded.name}!`);
// });

// app.get('/logout',authMiddleware,(req,res)=>{
//   res.clearCookie("name");
//   res.send("You have been logged out");
// })

// app.listen(3000, () => console.log("Server running on port 3000"));

