function sumEvenNumbers(arr) {
  let sum = 0;

  for (const str of arr) {
    const num = parseInt(str);
    if (!isNaN(num) && num % 2 === 0) {
      sum += num;
    }
  }

  console.log(sum);
}
