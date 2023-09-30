function slove(arr) {
  let originalSum = 0;
  let modifiedSum = 0;

  const modifiedArray = arr.map((number, index) => {
    if (number % 2 === 0) {
      const modifiedNumber = number + index;
      modifiedSum += modifiedNumber;
      originalSum += number;
      return modifiedNumber;
    } else {
      const modifiedNumber = number - index;
      modifiedSum += modifiedNumber;
      originalSum += number;
      return modifiedNumber;
    }
  });

  console.log(modifiedArray);
  console.log(originalSum);
  console.log(modifiedSum);
}

slove([5, 15, 23, 56, 35]);
