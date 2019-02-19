const nationalInsuranceModel = require("./model/nationalInsurance");
const studentLoanModel = require("./model/studentLoan");
const buildBrackets = require("./lib/buildBrackets");
const breakIntoBrackets = require("./lib/breakIntoBrackets");
const reduceBrackets = require("./lib/reduceBrackets");
const formatFromYearly = require("./lib/formatFromYearly");

const defaultOpts = {
  taxYear: "2018",
  isScotland: false,
  isBlind: false,
  NIExempt: false,
  pensionPercentage: 0,
  studentLoanPlan: ""
};

function calculate(salary, inputOpts = {}) {
  const opts = Object.assign({}, defaultOpts, inputOpts);
  const adjustedSalary = salary - salary * (opts.pensionPercentage / 100);
  const incomeBrackets = buildBrackets(adjustedSalary, opts);
  const incomeTax = breakIntoBrackets(adjustedSalary, incomeBrackets);
  const incomeReduction = reduceBrackets(incomeTax);

  const nationalInsurance = breakIntoBrackets(
    salary,
    nationalInsuranceModel[opts.taxYear].items
  );

  const niReduction = reduceBrackets(nationalInsurance);
  if (opts.NIExempt) niReduction.tax = 0;

  let studentLoanReduction = {
    tax: 0,
    gross: 0,
    taxable: 0
  };
  if (opts.studentLoanPlan) {
    const studentLoan = breakIntoBrackets(
      salary,
      studentLoanModel[opts.studentLoanPlan].items
    );
    studentLoanReduction = reduceBrackets(studentLoan);
  }

  const yearly = {
    gross: salary,
    taxable: incomeReduction.taxable,
    tax: incomeReduction.tax,
    ni: niReduction.tax,
    studentLoan: studentLoanReduction.tax,
    takeHome:
      adjustedSalary -
      incomeReduction.tax -
      niReduction.tax -
      studentLoanReduction.tax
  };

  const result = formatFromYearly(yearly);

  return result;
}

module.exports = calculate;
