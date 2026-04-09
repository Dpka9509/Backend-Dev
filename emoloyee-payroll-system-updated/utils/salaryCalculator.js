const calculateSalary = (basic) => {
  const hra = basic * 0.2;
  const da = basic * 0.1;
  const tax = basic * 0.05;
  const netSalary = basic + hra + da - tax;

  return { hra, da, tax, netSalary };
};

module.exports = { calculateSalary };