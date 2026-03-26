const employeeModel = require("../models/employeeModel");

exports.calculateSalary = async (req, res) => {
  const emp = await employeeModel.getEmployeeById(req.params.id);
  if (!emp) return res.redirect("/employees");

  const basic = Number(emp.basicSalary);
  const hra = basic * 0.2;
  const da = basic * 0.1;
  const pf = basic * 0.05;
  const netSalary = basic + hra + da - pf;

  res.render("payroll", { emp, netSalary });
};