// Getting all the required elements from the DOM
const homePriceInput = document.getElementById("homePrice");
const loanTermsInput = document.getElementById("loanTerms");
const interestRateInput = document.getElementById("interestRate");
const downPaymentInput = document.getElementById("downdPayment");
const salesTaxInput = document.getElementById("salesTax");
const feeInput = document.getElementById("fee");
const includeAllFeesCheckbox = document.getElementById("checkboxvalue");
const calculateButton = document.getElementById("calculateButton");
const monthlyPayHeading = document.getElementById("monthlyPay");
const loanAmountValue = document.getElementById("loanAmountValue");
const salesTaxAmount = document.getElementById("salesTaxAmount");
const upfrontPayment = document.getElementById("upfrontPayment");
const totalLoanInterest = document.getElementById("totalLoanInterest");
const totalCost = document.getElementById("totalCost");

// Adding event listener to the Calculate button
calculateButton.addEventListener("click", () => {
  // Getting the input values
  const homePrice = Number(homePriceInput.value.replaceAll(",", ""));
  const loanTerms = Number(loanTermsInput.value.replaceAll(",", ""));
  const interestRate = Number(interestRateInput.value.replaceAll(",", ""));
  const downPayment = Number(downPaymentInput.value.replaceAll(",", ""));
  const salesTax = Number(salesTaxInput.value.replaceAll(",", ""));
  const fee = Number(feeInput.value.replaceAll(",", ""));
  const includeAllFees = includeAllFeesCheckbox.checked;

  // Calculating the loan amount
  const loanAmount = homePrice - downPayment;

  // Calculating the sales tax amount
  const salesTaxAmountValue = (salesTax / 100) * homePrice;

  // Calculating the upfront payment
  const upfrontPaymentValue = includeAllFees
    ? loanAmount + salesTaxAmountValue + fee
    : downPayment + salesTaxAmountValue + fee;

  // Calculating the monthly payment
  const monthlyRate = (interestRate / 100) / 12;
  const months = loanTerms * 12;
  const monthlyPayment =
    (loanAmount * monthlyRate * (1 + monthlyRate) ** months) /
    ((1 + monthlyRate) ** months - 1);

  // Calculating the total loan interest
  const totalLoanInterestValue = monthlyPayment * months - loanAmount;

  // Calculating the total cost
  const totalCostValue = includeAllFees
    ? homePrice + totalLoanInterestValue
    : homePrice + totalLoanInterestValue + salesTaxAmountValue + fee;

  // Updating the result values
  monthlyPayHeading.textContent = `Monthly Pay: $${formatNumber(monthlyPayment)}`;
  loanAmountValue.textContent = `$${formatNumber(loanAmount)}`;
  salesTaxAmount.textContent = `$${formatNumber(salesTaxAmountValue)}`;
  upfrontPayment.textContent = `$${formatNumber(upfrontPaymentValue)}`;
  totalLoanInterest.textContent = `$${formatNumber(totalLoanInterestValue)}`;
  totalCost.textContent = `$${formatNumber(totalCostValue)}`;
});

// Function to format numbers with commas and decimal points if needed
function formatNumber(num) {
  const parts = num.toFixed(2).toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
