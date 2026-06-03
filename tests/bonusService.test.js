const { calculateBonus } = require("../src/bonusService");

describe("Bonus Calculation", () => {

  test("should return 2% bonus for salary below 500000", () => {
    expect(calculateBonus(400000)).toBe(8000);
  });

  test("should return 5% bonus for salary between 500000 and 1000000", () => {
    expect(calculateBonus(800000)).toBe(40000);
  });

  test("should return 8% bonus for salary above 1000000", () => {
    expect(calculateBonus(1500000)).toBe(120000);
  });

  test("should throw error for negative salary", () => {
    expect(() => calculateBonus(-1)).toThrow();
  });

});