document.querySelector("#calculateButton").onclick =
  function calculateTheMonthlyPayment() {
    let homePrice = document.querySelector("#homePrice").value;
    let loanTerms = document.querySelector("#loanTerms").value;
    let interestRate = document.querySelector("#interestRate").value;
    let downPayment = document.querySelector("#downdPayment").value;
    let checkboxvalue = document.querySelector("#checkboxvalue").checked;
    let salesTax = document.querySelector("#salesTax").value;
    let fee = document.querySelector("#fee").value;
    let monthlyPay = document.querySelector("#monthlyPay");
    let upfrontPayment = document.querySelector("#upfrontPayment");
    let loanAmountValue = document.querySelector("#loanAmountValue");
    let salesTaxAmount = document.querySelector("#salesTaxAmount");
    let totalOfLoanPayments = document.querySelector("#totalOfLoanPayments");
    let totalLoanInterest = document.querySelector("#totalLoanInterest");
    let totalCost = document.querySelector("#totalCost");
    let recommendedSalary = document.querySelector("#recommendedSalary");
    let totalOfLoanPaymentsValue = document.querySelector(
      "#totalOfLoanPaymentsValue"
    );
    interestRate = +interestRate / 100;
    loanTerms = +loanTerms;
    downPayment = +downPayment;
    fee = +fee;
    salesTax = +salesTax / 100;
    let loanAmount;
    let salesTaxValue = 0;
    if (salesTax !== "") {
      salesTaxValue = (homePrice - downPayment) * salesTax;
    }
    if (checkboxvalue) {
      salesTaxValue = (homePrice - downPayment) * salesTax;
      loanAmount = homePrice - downPayment + salesTaxValue + fee;
    } else {
      loanAmount = homePrice - downPayment;
    }
    let monthlyPayAmount =
      (+loanAmount * (interestRate / 12)) /
      (1 - (1 + interestRate / 12) ** -loanTerms);

    monthlyPay.innerHTML = `Monthly Pay : $ ${monthlyPayAmount.toFixed(2)}`;
    loanAmountValue.innerHTML = `$ ${loanAmount}`;
    if (!checkboxvalue) {
      upfrontPayment.innerHTML = `$ ${downPayment + salesTaxValue + fee}`;
    } else {
      upfrontPayment.innerHTML = `$ ${downPayment}`;
    }
    salesTaxAmount.innerHTML = `$ ${salesTaxValue ? salesTaxValue : 0}`;
    totalOfLoanPayments.innerHTML = `Total of ${loanTerms} Loan Payments`;
    let TI = monthlyPayAmount.toFixed(2) * loanTerms - loanAmount;
    totalLoanInterest.innerHTML = `$ ${TI.toFixed(2)}`;
    totalOfLoanPaymentsValue.innerHTML = `$ ${
      monthlyPayAmount.toFixed(2) * loanTerms
    }`;
    let totalCostValue = +homePrice + +TI + +salesTaxValue + +fee;
    totalCost.innerHTML = `$ ${totalCostValue.toFixed(2)}`;
    recommendedSalary.innerHTML = `$ ${(monthlyPayAmount * 10).toFixed(0)}`;


  
  };
