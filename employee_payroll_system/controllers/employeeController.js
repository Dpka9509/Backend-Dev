let employees = [];
let id = 1;

exports.getEmployees = (req, res) => {
    res.render("list", { employees });
};

exports.showForm = (req, res) => {
    res.render("form");
};

exports.addEmployee = (req, res) => {
    const { name, gender, department, salary, startDate } = req.body;

    employees.push({
        id: id++,
        name,
        gender,
        department,
        salary,
        startDate
    });

    res.redirect("/employees");
};

exports.editEmployee = (req, res) => {
    const employee = employees.find(e => e.id == req.params.id);
    res.render("edit", { employee });
};

exports.updateEmployee = (req, res) => {
    const employee = employees.find(e => e.id == req.params.id);
    Object.assign(employee, req.body);
    res.redirect("/employees");
};

exports.deleteEmployee = (req, res) => {
    employees = employees.filter(e => e.id != req.params.id);
    res.redirect("/employees");
};