// Get all buttons from the DOM
const buttons = document.querySelectorAll('.buttons');

// Initialize variables to keep track of the current number and operation
let currentNumber = "";
let previousNumber = "";
let operation = "";
let string = "";

// Add event listeners to all buttons
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    // Get the value of the button that was clicked
    const value = e.target.value;

    // Check if the button is a number or an operation
    if (!isNaN(value) || value === ".") {
      currentNumber += value;
      string += value;
      updateDisplay(string);
    } else if (value === "C") {
      currentNumber = "";
      previousNumber = "";
      operation = "";
      string = "";
      updateDisplay(string);
    } else if (value === "=") {
      // Perform the calculation
      const result = performCalculation(previousNumber, currentNumber, operation);
      updateDisplay(result);
      // Reset the values
      previousNumber = result;
      currentNumber = "";
      operation = "";
    } else {
      if (currentNumber) {
        // If the current number is not empty, store it as the previous number
        previousNumber = currentNumber;
        currentNumber = "";
      }
      // Store the operation
      operation = value;
      string += value;
      updateDisplay(string);
    }
  });
});

// Function to perform the calculation
function performCalculation(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        alert("Cannot divide by zero");
        return "Error";
      } else {
        return num1 / num2;
      }
    default:
      return;
  }
}

// Function to update the display
function updateDisplay(value) {
  const display = document.querySelector('#display');
  display.value = value;
}
