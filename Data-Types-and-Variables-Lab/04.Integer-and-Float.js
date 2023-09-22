function slove(a, b, c) {
  let sum = a + b + c;
  let sumAsString = String(sum);

  let isFloat = false;

  for (let i = 0; i < sumAsString.length; i++) {
    if (sumAsString[i] == `.`) {
      isFloat = true;
    }
  }

  console.log(`${sum} - ${isFloat ? "Float" : "Integer"}`);
}
