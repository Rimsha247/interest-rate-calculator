// Pure calculation logic (no DOM), so it can be tested with Jasmine.
// Simple interest: interest = principal * (rate / 100) * years
function calculate(principal, rate, years) {
  principal = Number(principal);
  rate = Number(rate);
  years = Number(years);

  if (![principal, rate, years].every(Number.isFinite)) {
    throw new Error('Principal, rate and years must be numbers.');
  }
  if (principal <= 0) {
    throw new Error('Principal must be greater than zero.');
  }
  if (rate < 0 || rate > 20) {
    throw new Error('Rate must be between 0 and 20.');
  }
  if (years <= 0) {
    throw new Error('Years must be greater than zero.');
  }

  return (principal * rate * years) / 100;
}

module.exports = { calculate };
