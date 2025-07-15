// Callback functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// Higher-order function that accepts a callback
function operate(a, b, callback) {
  return callback(a, b);
}

// Event handler for the button
function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter valid numbers.";
  } else {
    switch (operation) {
      case "add":
        result = operate(num1, num2, add);
        break;
      case "subtract":
        result = operate(num1, num2, subtract);
        break;
      case "multiply":
        result = operate(num1, num2, multiply);
        break;
    }
  }

  document.getElementById("result").textContent = "Result: " + result;
}
