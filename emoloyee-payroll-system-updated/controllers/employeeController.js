const Employee = require("../models/employeeModel");
const { calculateSalary } = require("../utils/salaryCalculator");

// FORM PAGE
const showForm = (req, res) => {
  res.render("form");
};

// GET ALL
const getAllEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.render("list", { employees }); // ✅ FIXED
};

// GET BY ID
const getEmployeeById = async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.render("payroll", { employee });
};

// CREATE
const createEmployee = async (req, res) => {
  try {
    const basicSalary = Number(req.body.basic_sal); // ✅ FIXED

    if (!basicSalary) {
      return res.send("Basic Salary is required");
    }

    const salary = calculateSalary(basicSalary);

    const employee = await Employee.create({
      name: req.body.name,
      gender: req.body.gender,
      department: req.body.department,
      basicSalary,
      ...salary,
      date: req.body.date,
      notes: req.body.notes
    });

    res.redirect("/employees");
  } catch (err) {
    console.log(err);
    res.send("Error creating employee");
  }
};

// UPDATE
const updateEmployee = async (req, res) => {
  const basicSalary = Number(req.body.basic_sal);

  const salary = calculateSalary(basicSalary);

  await Employee.findByIdAndUpdate(
    req.params.id,
    { ...req.body, basicSalary, ...salary }
  );

  res.redirect("/employees");
};

// DELETE
const deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.redirect("/employees");
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  showForm
};