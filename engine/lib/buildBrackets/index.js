const incomeTax = require("../../model/incomeTax");

module.exports = function buildBrackets(salary, opts = {}) {
  const { taxYear, isScotland, isBlind } = opts;
  const model = Object.assign(
    {},
    isScotland ? incomeTax[taxYear].scotland : incomeTax[taxYear]
  );

  const { diminishRatePerUnit, diminishThreshold, blindAllowance } = model;
  if (isBlind) {
    model.items[0].upper += blindAllowance;
    // for scotland
    if (model.items[1].upper < model.items[0].upper) {
      model.items[2].lower = model.items[0].upper;
      model.items[1].upper = model.items[0].upper;
    }
    model.items[1].lower += blindAllowance;
  }
  if (salary < diminishThreshold) return model.items;

  const diffUnits = salary - diminishThreshold;
  const reduction = diminishRatePerUnit * diffUnits;

  const baseUpper = model.items[0].upper;
  if (reduction >= baseUpper) {
    model.items[0].upper = 0;
    model.items[1].lower = 0;
    return model.items;
  }

  model.items[0].upper -= reduction;
  model.items[1].lower -= reduction;

  return model.items;
};
