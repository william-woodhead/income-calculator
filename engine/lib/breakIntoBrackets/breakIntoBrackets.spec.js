const breakIntoBrackets = require("./index");
const incomeTaxModel = require("../../model/incomeTax");

describe("Break into brackets", () => {
  it("should cope with under the first threshold", () => {
    expect(breakIntoBrackets(10000, incomeTaxModel["2019"].items)).toEqual([
      {
        amount: 10000,
        rate: 0
      },
      {
        amount: 0,
        rate: 20
      },
      {
        amount: 0,
        rate: 40
      },
      {
        amount: 0,
        rate: 45
      }
    ]);
  });

  it("should cope with under the second threshold", () => {
    expect(breakIntoBrackets(40000, incomeTaxModel["2019"].items)).toEqual([
      {
        amount: 12500,
        rate: 0
      },
      {
        amount: 27500,
        rate: 20
      },
      {
        amount: 0,
        rate: 40
      },
      {
        amount: 0,
        rate: 45
      }
    ]);
  });

  it("should cope with under the third threshold", () => {
    expect(breakIntoBrackets(60000, incomeTaxModel["2019"].items)).toEqual([
      {
        amount: 12500,
        rate: 0
      },
      {
        amount: 33850,
        rate: 20
      },
      {
        amount: 13650,
        rate: 40
      },
      {
        amount: 0,
        rate: 45
      }
    ]);
  });

  it("should cope with above the third threshold", () => {
    expect(breakIntoBrackets(160000, incomeTaxModel["2019"].items)).toEqual([
      {
        amount: 12500,
        rate: 0
      },
      {
        amount: 33850,
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
    ]);
  });
});
