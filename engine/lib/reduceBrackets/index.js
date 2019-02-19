module.exports = function reduceBrackets(brackets) {
  return brackets.reduce(
    (result, bracket) => {
      const res = Object.assign({}, result);
      res.tax = res.tax + bracket.amount * (bracket.rate / 100);
      res.gross = res.gross + bracket.amount;
      res.taxable =
        bracket.rate > 0 ? res.taxable + bracket.amount : res.taxable;
      return res;
    },
    {
      tax: 0,
      gross: 0,
      taxable: 0
    }
  );
};
