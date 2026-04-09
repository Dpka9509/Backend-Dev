const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// routes
const employeeRoutes = require("./routes/employeeRoute");
app.use("/employees", employeeRoutes);

// home
app.get("/", (req, res) => {
  res.redirect("/employees");
});

// DB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});