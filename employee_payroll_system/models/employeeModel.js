let employees = [
  {
    id: 1,
    name: "Deepika",
    gender: "Female",
    department: "IT",
    basicSalary: 50000,
    joiningDate: "2024-01-15"
  }
];

let currentId = 2;

const getAllEmployees = async () => employees;

const getEmployeeById = async (id) =>
  employees.find(emp => emp.id === parseInt(id));

const createEmployee = async (data) => {
  const newEmployee = { id: currentId++, ...data };
  employees.push(newEmployee);
  return newEmployee;
};

const updateEmployee = async (id, data) => {
  const index = employees.findIndex(emp => emp.id === parseInt(id));
  if (index === -1) return null;
  employees[index] = { ...employees[index], ...data };
  return employees[index];
};

const deleteEmployee = async (id) => {
  const index = employees.findIndex(emp => emp.id === parseInt(id));
  if (index === -1) return null;
  return employees.splice(index, 1)[0];
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
};