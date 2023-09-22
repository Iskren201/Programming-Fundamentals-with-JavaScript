function slove(number) {
  let sum = 0;
  let numStr = number.toString();

  for (let i = 0; i < numStr.length; i++) {
    let digit = parseInt(numStr[i], 10);
    sum += digit;
  }
  console.log(sum);
}

slove(22);
