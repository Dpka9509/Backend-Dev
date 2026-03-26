const express = require("express");
const router = express.Router();
const controller = require("../controllers/employeeController");

router.get("/", controller.getEmployees);
router.get("/new", controller.showForm);
router.post("/", controller.addEmployee);
router.get("/edit/:id", controller.editEmployee);
router.post("/update/:id", controller.updateEmployee);
router.put("/delete/:id", controller.deleteEmployee);

module.exports = router;