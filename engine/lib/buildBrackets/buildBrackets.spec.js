const buildBrackets = require("./index");

describe("Build brackets", () => {
  it("should stay the same for under income threshold", () => {
    const brackets = buildBrackets(30000, {
      taxYear: "2019",
      isScotland: false
    });
    expect(brackets).toEqual([
      {
        lower: 0,
        upper: 12500,
        rate: 0
      },
      {
        lower: 12500,
        upper: 46350,
        rate: 20
      },
      {
        lower: 46350,
        upper: 150000,
        rate: 40
      },
      {
        lower: 150000,
        rate: 45
      }
    ]);
  });

  it("should diminish above income threshold", () => {
    const brackets = buildBrackets(110000, {
      taxYear: "2019",
      isScotland: false
    });
    expect(brackets).toEqual([
      {
        lower: 0,
        upper: 7500,
        rate: 0
      },
      {
        lower: 7500,
        upper: 46350,
        rate: 20
      },
      {
        lower: 46350,
        upper: 150000,
        rate: 40
      },
      {
        lower: 150000,
        rate: 45
      }
    ]);
  });

  it("should finish diminishing above certain threshold", () => {
    const brackets = buildBrackets(130000, {
      taxYear: "2019",
      isScotland: false
    });
    expect(brackets).toEqual([
      {
        lower: 0,
        upper: 0,
        rate: 0
      },
      {
        lower: 0,
        upper: 46350,
        rate: 20
      },
      {
        lower: 46350,
        upper: 150000,
        rate: 40
      },
      {
        lower: 150000,
        rate: 45
      }
    ]);
  });
});
