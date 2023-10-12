function slove(arr) {
  let K = arr[0];
  let lastEl = arr[arr.length - 1];

  let firstK = arr.slice(1, 1 + K);
  let lastK = arr.slice(-K);
  console.log(firstK.join(" "));
  console.log(lastK.join(" "));
}

slove([2, 7, 8, 9]);
