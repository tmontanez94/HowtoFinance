document.querySelector("#calculateButton").onclick = function calculateTheMonthlyPayment() {
  let autoPrice = document.querySelector("#autoPrice").value.replace(/\D/g,'');
  let loanTerms = document.querySelector("#loanTerms").value.replace(/\D/g,'');
  let interestRate = document.querySelector("#interestRate").value.replace(/\D/g,'');
  let downPayment = document.querySelector("#downdPayment").value.replace(/\D/g,'');
  let tradeInValue = document.querySelector("#tradeInValue").value.replace(/\D/g,'');
  let checkboxvalue = document.querySelector("#checkboxvalue").checked;
  let salesTax = document.querySelector("#salesTax").value.replace(/\D/g,'');
  let fee = document.querySelector("#fee").value.replace(/\D/g,'');
  let monthlyPay = document.querySelector("#monthlyPay");
  let upfrontPayment = document.querySelector("#upfrontPayment");
  let loanAmountValue = document.querySelector("#loanAmountValue");
  let salesTaxAmount = document.querySelector("#salesTaxAmount");
  let totalLoanInterest = document.querySelector("#totalLoanInterest");
  let totalCost = document.querySelector("#totalCost");
  let recommendedSalary = document.querySelector("#recommendedSalary");
  interestRate = +interestRate / 100;
  loanTerms = +loanTerms;
  downPayment = +downPayment;
  fee = +fee;
  salesTax = +salesTax / 100;
  let loanAmount;
  let salesTaxValue = 0;
  if (salesTax !== "") {
    salesTaxValue = (autoPrice - tradeInValue) * salesTax;
  }
  if (checkboxvalue) {
    salesTaxValue = (autoPrice - tradeInValue) * salesTax;
    loanAmount = autoPrice - tradeInValue - downPayment + salesTaxValue + fee;
  } else {
    loanAmount = autoPrice - tradeInValue - downPayment;
  }
  let monthlyPayAmount = (+loanAmount * (interestRate / 12)) / (1 - (1 + interestRate / 12) ** -loanTerms);

  monthlyPay.innerHTML = `Monthly Pay : $ ${monthlyPayAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  loanAmountValue.innerHTML = `$ ${loanAmount.toLocaleString()}`;
  if (!checkboxvalue) {
    upfrontPayment.innerHTML = `$ ${(downPayment + salesTaxValue + fee).toLocaleString()}`;
  } else {
    upfrontPayment.innerHTML = `$ ${downPayment.toLocaleString()}`;
  }
  salesTaxAmount.innerHTML = `$ ${salesTaxValue ? salesTaxValue.toLocaleString() : 0}`;
  let TI = monthlyPayAmount.toFixed(2) * loanTerms - loanAmount;
  totalLoanInterest.innerHTML = `$ ${TI.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  let totalCostValue = +autoPrice + +TI + +salesTaxValue + +fee;
  totalCost.innerHTML = `$ ${totalCostValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  recommendedSalary.innerHTML = `$ ${(monthlyPayAmount * 10 * 12).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}`;
}
