function slove(arr) {
  let sorted = arr.sort();

  //   console.log(sorted);

  for (let i = 0; i < sorted.length; i++) {
    console.log(`${i + 1}.${sorted[i]}`);
  }
}

slove(["Potatoes", "Tomatoes", "Onions", "Apples"]);
