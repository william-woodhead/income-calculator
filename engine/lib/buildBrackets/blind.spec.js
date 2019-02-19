const buildBrackets = require("./index");

describe("Build brackets for the blind", () => {
  it("should stay the same for under income threshold", () => {
    const brackets = buildBrackets(30000, {
      taxYear: "2019",
      isScotland: false,
      isBlind: true
    });
    expect(brackets).toEqual([
      {
        lower: 0,
        upper: 14890,
        rate: 0
      },
      {
        lower: 14890,
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

  it("should work with diminishment above income threshold", () => {
    const brackets = buildBrackets(110000, {
      taxYear: "2019",
      isScotland: false,
      isBlind: true
    });
    expect(brackets).toEqual([
      {
        lower: 0,
        upper: 12280,
        rate: 0
      },
      {
        lower: 12280,
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

  it("should work above diminishment threshold", () => {
    const brackets = buildBrackets(130000, {
      taxYear: "2019",
      isScotland: false,
      isBlind: true
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

  it("should work for scotland", () => {
    const brackets = buildBrackets(30000, {
      taxYear: "2019",
      isScotland: true,
      isBlind: true
    });
    expect(brackets).toEqual([
      {
        lower: 0,
        upper: 14240,
        rate: 0
      },
      {
        lower: 14240,
        upper: 14240,
        rate: 19
      },
      {
        lower: 14240,
        upper: 24000,
        rate: 20
      },
      {
        lower: 24000,
        upper: 43430,
        rate: 21
      },
      {
        lower: 43430,
        upper: 150000,
        rate: 41
      },
      {
        lower: 150000,
        rate: 46
      }
    ]);
  });
});
