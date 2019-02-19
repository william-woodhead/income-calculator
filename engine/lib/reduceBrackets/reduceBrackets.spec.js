const reduceBrackets = require("./index");

describe("Reduce brackets", () => {
  it("should reduce brackets", () => {
    const brackets = [
      {
        amount: 11850,
        rate: 0
      },
      {
        amount: 34500,
        rate: 20
      },
      {
        amount: 103650,
        rate: 40
      },
      {
        amount: 10000,
        rate: 45
      }
    ];
    expect(reduceBrackets(brackets)).toEqual({
      gross: 160000,
      taxable: 148150,
      tax: 52860
    });
  });
});
