const calculate = require("../calculate");

describe("When the person has a pension", () => {
  it("should convert a basic salary", () => {
    const result = calculate(30000, { pensionPercentage: 3 });
    expect(result.yearly.gross).toBe("30000.00");
    expect(result.yearly.taxable).toBe("17250.00");
    expect(result.yearly.tax).toBe("3450.00");
    expect(result.yearly.ni).toBe("2589.12");
    expect(result.yearly.takeHome).toBe("23060.88");
  });
});
