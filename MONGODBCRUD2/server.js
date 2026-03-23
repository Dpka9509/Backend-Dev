import connectDb from "./config/db.js";
import dotenv from "dotenv";
import express from "express";
import router from "./routes/userRoutes.js";

dotenv.config();
connectDb();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});