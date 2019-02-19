const calculate = require("../calculate");

describe("When the person has a student loan", () => {
  it("should convert a basic salary", () => {
    const result = calculate(30000, { studentLoanPlan: "plan1" });
    expect(result.yearly.gross).toBe("30000.00");
    expect(result.yearly.taxable).toBe("18150.00");
    expect(result.yearly.tax).toBe("3630.00");
    expect(result.yearly.ni).toBe("2589.12");
    expect(result.yearly.studentLoan).toBe("1050.30");
    expect(result.yearly.takeHome).toBe("22730.58");
  });
});
