let calculateButton = document.querySelector("#calculateButton");
calculateButton.addEventListener("click", calculateCompoundInterest);

function calculateCompoundInterest() {
  let initialInvestment = +document.querySelector("#initialInvestment").value;
  let monthlyContribution = +document.querySelector("#monthlyContribution").value;
  let timeInYears = +document.querySelector("#timeInYears").value;
  let interestRate = +document.querySelector("#interestRate").value;
  let totalContributions = document.querySelector("#totalContributions");
  let futureValue = document.querySelector("#futureValue");
  let percentageDifference = document.querySelector("#percentageDifference");

  interestRate = interestRate / 100;
  timeInYears = timeInYears;
  initialInvestment = initialInvestment;
  monthlyContribution = monthlyContribution;

  let totalMonths = timeInYears * 12;
  let futureValueAmount = initialInvestment * Math.pow(1 + interestRate / 12, totalMonths) +
    monthlyContribution * (Math.pow(1 + interestRate / 12, totalMonths) - 1) / (interestRate / 12);
  let totalContributionsAmount = initialInvestment + monthlyContribution * totalMonths;
  let percentageDiffAmount = ((futureValueAmount - totalContributionsAmount) / totalContributionsAmount) * 100;

  totalContributions.innerHTML = `Total Contributions: $${totalContributionsAmount.toFixed(2)}`;
  futureValue.innerHTML = `Future Value: $${futureValueAmount.toFixed(2)}`;
  percentageDifference.innerHTML = `Percentage Difference: ${percentageDiffAmount.toFixed(2)}%`;
}
