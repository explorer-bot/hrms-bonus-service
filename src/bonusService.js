function calculateBonus(salary) {
  if (salary < 0) {
    throw new Error("Salary cannot be negative");
  }

  if (salary < 500000) {
    return salary * 0.02;
  }

  if (salary <= 1000000) {
    return salary * 0.05;
  }

  if (salary <= 2000000) {
    return salary * 0.08;
  }

  return salary * 0.10;
}

module.exports = {
  calculateBonus
};