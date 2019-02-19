module.exports = {
  "2019": {
    diminishThreshold: 100000,
    diminishRatePerUnit: 0.5,
    blindAllowance: 2390,
    items: [
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
    ],
    scotland: {
      diminishThreshold: 100000,
      diminishRatePerUnit: 0.5,
      blindAllowance: 2390,
      items: [
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
      ]
    }
  },
  "2018": {
    diminishThreshold: 100000,
    diminishRatePerUnit: 0.5,
    blindAllowance: 2390,
    items: [
      {
        lower: 0,
        upper: 11850,
        rate: 0
      },
      {
        lower: 11850,
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
    ]
  },
  scotland: {
    diminishThreshold: 100000,
    diminishRatePerUnit: 0.5,
    blindAllowance: 2390,
    items: [
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
    ]
  }
};
