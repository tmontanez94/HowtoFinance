const loanAmount = document.querySelector('#loanAmount');
const loanTerms = document.querySelector('#loanTerms');
const interestRate = document.querySelector('#interestRate');
const calculateButton = document.querySelector('#calculateButton');
const monthlyPay = document.querySelector('#monthlyPay');
const totalInterestPaid = document.querySelector('#totalInterestPaid');
const totalCost = document.querySelector('#totalCost');

// add event listener to calculate button
calculateButton.addEventListener('click', () => {
  // get input values
  const loanAmt = parseFloat(loanAmount.value.replace(/,/g, ''));
  const loanTrms = parseFloat(loanTerms.value.replace(/,/g, ''));
  const intRate = parseFloat(interestRate.value.replace(/,/g, '')) / 100 / 12;

  // calculate monthly payment
  const x = Math.pow(1 + intRate, loanTrms);
  const monthlyPayment = (loanAmt * x * intRate) / (x - 1);

  // calculate total cost and interest paid
  const totalCostValue = monthlyPayment * loanTrms;
  const totalInterestValue = totalCostValue - loanAmt;

  // update result values
  monthlyPay.textContent = `Monthly Payment: $${monthlyPayment.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  totalInterestPaid.textContent = `$${totalInterestValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  totalCost.textContent = `$${totalCostValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;

  // update input values with commas
  loanAmount.value = loanAmount.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  loanTerms.value = loanTerms.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  interestRate.value = interestRate.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});
