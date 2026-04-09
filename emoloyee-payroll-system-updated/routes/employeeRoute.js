const express = require("express");
const router = express.Router();

const {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  showForm
} = require("../controllers/employeeController");

// IMPORTANT: specific routes first
router.get("/new", showForm);

router.get("/", getAllEmployees);
router.get("/:id", getEmployeeById);

router.post("/", createEmployee);
router.post("/update/:id", updateEmployee);
router.get("/delete/:id", deleteEmployee);

module.exports = router;