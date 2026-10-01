require('./style.css');
const { calculate } = require('./calculator');

function compute() {
  const principalInput = document.getElementById('principal');
  const rateInput = document.getElementById('rate');
  const yearsInput = document.getElementById('years');
  const result = document.getElementById('result');

  // Prevent TypeErrors: stop if any element is missing from the page
  if (!principalInput || !rateInput || !yearsInput || !result) {
    console.error('Calculator elements are missing from the page.');
    return;
  }

  // Input values are strings, so convert them to numbers
  const principal = parseFloat(principalInput.value);
  const rate = parseFloat(rateInput.value);
  const years = parseInt(yearsInput.value, 10);

  try {
    const interest = calculate(principal, rate, years);
    const year = new Date().getFullYear() + years;
    result.textContent =
      'If you deposit ' + principal.toFixed(2) + ', at an interest rate of ' +
      rate + '%, you will receive an amount of ' + interest.toFixed(2) +
      ', in the year ' + year + '.';
    result.classList.remove('error');
  } catch (err) {
    result.textContent = err.message;
    result.classList.add('error');
  }
}

function updateRateLabel() {
  const rateInput = document.getElementById('rate');
  const label = document.getElementById('rate-value');
  if (!rateInput || !label) {
    return;
  }
  label.textContent = parseFloat(rateInput.value).toFixed(2) + '%';
}

document.addEventListener('DOMContentLoaded', function () {
  const rateInput = document.getElementById('rate');
  const button = document.getElementById('compute');

  if (rateInput) {
    rateInput.addEventListener('input', updateRateLabel);
  }
  if (button) {
    button.addEventListener('click', compute);
  }
  updateRateLabel();
});