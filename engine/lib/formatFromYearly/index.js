module.exports = function(yearly) {
  const yearlyFixed = {
    gross: yearly.gross.toFixed(2),
    taxable: yearly.taxable.toFixed(2),
    tax: yearly.tax.toFixed(2),
    ni: yearly.ni.toFixed(2),
    studentLoan: yearly.studentLoan.toFixed(2),
    takeHome: yearly.takeHome.toFixed(2)
  };

  const monthly = {
    gross: (yearly.gross / 12).toFixed(2),
    taxable: (yearly.taxable / 12).toFixed(2),
    tax: (yearly.tax / 12).toFixed(2),
    ni: (yearly.ni / 12).toFixed(2),
    studentLoan: (yearly.studentLoan / 12).toFixed(2),
    takeHome: (yearly.takeHome / 12).toFixed(2)
  };

  const weekly = {
    gross: (yearly.gross / 52).toFixed(2),
    taxable: (yearly.taxable / 52).toFixed(2),
    tax: (yearly.tax / 52).toFixed(2),
    ni: (yearly.ni / 52).toFixed(2),
    studentLoan: (yearly.studentLoan / 52).toFixed(2),
    takeHome: (yearly.takeHome / 52).toFixed(2)
  };

  return {
    yearly: yearlyFixed,
    monthly,
    weekly
  };
};
