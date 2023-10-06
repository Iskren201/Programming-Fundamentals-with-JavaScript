function slove(num1, num2, num3) {
  let result1 = sum(num1, num2);
  let result2 = subtract(result1, num3);
  console.log(result2);

  function sum(num1, num2) {
    return num1 + num2;
  }

  function subtract(num1, num2) {
    return num1 - num2;
  }
}

slove(23, 6, 10);
