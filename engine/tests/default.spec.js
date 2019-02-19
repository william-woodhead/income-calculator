const calculate = require("../calculate");

describe("The basic functionality", () => {
  it("should convert a basic salary without options", () => {
    const result = calculate(30000);
    expect(result.yearly.gross).toBe("30000.00");
    expect(result.yearly.taxable).toBe("18150.00");
    expect(result.yearly.tax).toBe("3630.00");
    expect(result.yearly.ni).toBe("2589.12");
    expect(result.yearly.takeHome).toBe("23780.88");

    expect(result.monthly.gross).toBe("2500.00");
    expect(result.monthly.taxable).toBe("1512.50");
    expect(result.monthly.tax).toBe("302.50");
    expect(result.monthly.ni).toBe("215.76");
    expect(result.monthly.takeHome).toBe("1981.74");

    expect(result.weekly.gross).toBe("576.92");
    expect(result.weekly.taxable).toBe("349.04");
    expect(result.weekly.tax).toBe("69.81");
    expect(result.weekly.ni).toBe("49.79");
    expect(result.weekly.takeHome).toBe("457.32");
  });
});
