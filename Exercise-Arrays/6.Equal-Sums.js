function slove(arr) {
  for (let i = 0; i < arr.length; i++) {
    const leftSum = arr.slice(0, i).reduce((acc, val) => acc + val, 0);
    const rightSum = arr.slice(i + 1).reduce((acc, val) => acc + val, 0);

    if (leftSum === rightSum) {
      return i;
    }
  }
  if (arr.length === 1) {
    console.log("0");
  }

  console.log("no");
}

slove([1]);
