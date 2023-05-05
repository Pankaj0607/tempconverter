// Get elements from the DOM
const tempInput = document.getElementById("tempInput");
const unitSelect = document.getElementById("unitSelect");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

// Add event listener to the convert button
convertBtn.addEventListener("click", () => {
  // Get the input value and selected unit
  const temp = parseFloat(tempInput.value);
  const unit = unitSelect.value;

  // Check if input is a number
  if (isNaN(temp)) {
    result.value = "Invalid input";
    return;
  }

  // Convert the temperature based on the selected unit
  let convertedTemp;
  let convertedUnit;
  if (unit === "celsius") {
    convertedTemp = (temp * 9/5) + 32;
    convertedUnit = "Fahrenheit";
  } else if (unit === "fahrenheit") {
    convertedTemp = (temp - 32) * 5/9;
    convertedUnit = "Celsius";
  } else if (unit === "kelvin") {
    convertedTemp = temp - 273.15;
    convertedUnit = "Celsius";
  }

  // Update the result
  result.value = `${convertedTemp.toFixed(2)} ${convertedUnit}`;
});
