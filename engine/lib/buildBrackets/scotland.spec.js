const buildBrackets = require("./index");

describe("Build brackets for scotland", () => {
  it("should stay the same for under income threshold", () => {
    const brackets = buildBrackets(30000, {
      taxYear: "2019",
      isScotland: true
    });
    expect(brackets).toEqual([
      {
        lower: 0,
        upper: 11850,
        rate: 0
      },
      {
        lower: 11850,
        upper: 13850,
        rate: 19
      },
      {
        lower: 13850,
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

  it("should diminish above income threshold", () => {
    const brackets = buildBrackets(110000, {
      taxYear: "2019",
      isScotland: true
    });
    expect(brackets).toEqual([
      {
        lower: 0,
        upper: 6850,
        rate: 0
      },
      {
        lower: 6850,
        upper: 13850,
        rate: 19
      },
      {
        lower: 13850,
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

  it("should finish diminishing above certain threshold", () => {
    const brackets = buildBrackets(130000, {
      taxYear: "2019",
      isScotland: true
    });
    expect(brackets).toEqual([
      {
        lower: 0,
        upper: 0,
        rate: 0
      },
      {
        lower: 0,
        upper: 13850,
        rate: 19
      },
      {
        lower: 13850,
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
