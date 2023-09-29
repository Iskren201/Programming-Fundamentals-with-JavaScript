function slove(arr) {
  let oldSum = 0;
  let newSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    oldSum += num;

    if (num % 2 == 0) {
      num += i;
    } else {
      num -= i;
    }

    newSum += num;
  }

  console.log(arr);
  console.log(oldSum);
  console.log(newSum);
}
