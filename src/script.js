require('./style.css');
const { calculate } = require('./calculator');

function compute() {
  const principal = document.getElementById('principal').value;
  const rate = document.getElementById('rate').value;
  const years = document.getElementById('years').value;
  const result = document.getElementById('result');

  try {
    const interest = calculate(principal, rate, years);
    const year = new Date().getFullYear() + Number(years);
    result.textContent =
      'If you deposit ' + Number(principal).toFixed(2) + ', at an interest rate of ' +
      Number(rate) + '%, you will receive an amount of ' + interest.toFixed(2) +
      ', in the year ' + year + '.';
    result.classList.remove('error');
  } catch (err) {
    result.textContent = err.message;
    result.classList.add('error');
  }
}

function updateRateLabel() {
  document.getElementById('rate-value').textContent =
    Number(document.getElementById('rate').value).toFixed(2) + '%';
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('rate').addEventListener('input', updateRateLabel);
  document.getElementById('compute').addEventListener('click', compute);
  updateRateLabel();
});
