function slove(arr) {
  let evenSum = 0;
  let oddSum = 0;

  for (const num of arr) {
    const parsedNum = parseInt(num);

    if (!isNaN(parsedNum)) {
      if (parsedNum % 2 === 0) {
        evenSum += parsedNum;
      } else {
        oddSum += parsedNum;
      }
    }
  }

  const difference = evenSum - oddSum;
  console.log(difference);
}
