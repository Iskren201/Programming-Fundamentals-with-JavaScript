function slove(arr, rotationCount) {
  for (let rotation = 1; rotation <= rotationCount; rotation++) {
    let firstEl = arr.shift();
    arr.push(firstEl);
  }

  console.log(arr.join(" "));
}
