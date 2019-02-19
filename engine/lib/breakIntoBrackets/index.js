module.exports = function breakIntoBrackets(salary, brackets) {
  let remainder = salary;
  return brackets.map(bracket => {
    const { upper, lower, rate } = bracket;
    const diff = upper - lower;
    const amount = upper && remainder >= diff ? diff : remainder;
    remainder = upper && remainder >= diff ? remainder - diff : 0;
    return {
      amount,
      rate
    };
  });
};
