const express = require("express");
const path = require("path");

const employeeRoutes = require("./routes/employeeRoute");
const pageRoutes = require("./routes/pageRoute");
const logger = require("./middleware/logger");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", pageRoutes);
app.use("/employees", employeeRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});