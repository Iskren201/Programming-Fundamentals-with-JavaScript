function compareArrays(arr1, arr2) {
  let areIdentical = true;
  let sum = 0;
  let index = -1;

  if (arr1.length !== arr2.length) {
    areIdentical = false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      const num1 = parseInt(arr1[i]);
      const num2 = parseInt(arr2[i]);

      if (num1 !== num2) {
        areIdentical = false;
        index = i;
        break;
      }

      sum += num1;
    }
  }

  if (areIdentical) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  } else {
    console.log(`Arrays are not identical. Found difference at ${index} index`);
  }
}
