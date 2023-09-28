function solve(n, inputArr) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    if (i < inputArr.length) {
      arr.push(inputArr[i]);
    } else {
      break;
    }
  }

  let output = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    output += arr[i];
    if (i > 0) {
      output += " ";
    }
  }

  console.log(output);
}
