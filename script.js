const principalBox = document.querySelector("#principal");
const aprSlider = document.querySelector("#apr");
const aprNum = document.querySelector("#aprNum");
const periodDrop = document.querySelector("#period");
const yearsBox = document.querySelector("#years");
const accumulatedOutput = document.querySelector("#accumulated");
const amountOutput = document.querySelector("#amount");

// Update APR display and recalculate
aprSlider.addEventListener("input", () => {
  aprNum.textContent = aprSlider.value;
  calculateCompoundInterest();
});

// Attach event listeners to inputs
principalBox.addEventListener("input", calculateCompoundInterest);
periodDrop.addEventListener("change", calculateCompoundInterest);
yearsBox.addEventListener("input", calculateCompoundInterest);

// Function to calculate compound interest
function calculateCompoundInterest() {
  const principal = parseFloat(principalBox.value);
  const apr = parseFloat(aprSlider.value) / 100; // Convert APR to decimal
  const period = parseFloat(periodDrop.value);
  const years = parseFloat(yearsBox.value);

  if (isNaN(principal) || isNaN(apr) || isNaN(period) || isNaN(years)) {
    accumulatedOutput.value = "";
    amountOutput.value = "";
    return;
  }

  // Compound interest formula
  const amount = principal * Math.pow(1 + apr / period, period * years);
  const interestAccumulated = amount - principal;

  // Update outputs
  accumulatedOutput.value = interestAccumulated.toFixed(2);
  amountOutput.value = amount.toFixed(2);
}
