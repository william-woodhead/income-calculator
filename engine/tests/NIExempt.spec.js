const calculate = require("../calculate");

describe("When the person is NI Exempt", () => {
  it("should convert a basic salary", () => {
    const result = calculate(30000, { NIExempt: true });
    expect(result.yearly.gross).toBe("30000.00");
    expect(result.yearly.taxable).toBe("18150.00");
    expect(result.yearly.tax).toBe("3630.00");
    expect(result.yearly.ni).toBe("0.00");
    expect(result.yearly.takeHome).toBe("26370.00");

    expect(result.monthly.gross).toBe("2500.00");
    expect(result.monthly.taxable).toBe("1512.50");
    expect(result.monthly.tax).toBe("302.50");
    expect(result.monthly.ni).toBe("0.00");
    expect(result.monthly.takeHome).toBe("2197.50");

    expect(result.weekly.gross).toBe("576.92");
    expect(result.weekly.taxable).toBe("349.04");
    expect(result.weekly.tax).toBe("69.81");
    expect(result.weekly.ni).toBe("0.00");
    expect(result.weekly.takeHome).toBe("507.12");
  });
});
