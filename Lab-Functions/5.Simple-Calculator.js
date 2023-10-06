function slove(numOne, numTwo, operator) {
  const operators = {
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
  };

  if (operators.hasOwnProperty(operator)) {
    console.log(operators[operator](numOne, numTwo));
  } else {
    console.log("Invalid operator");
  }
}

slove(5, 5, "multiply");
