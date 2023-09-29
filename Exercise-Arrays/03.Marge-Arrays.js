function slove(arr1, arr2) {
  let margedArr = [];

  for (let i = 0; i < arr1.length; i++) {
    let el1 = arr1[i];
    let el2 = arr2[i];

    if (i % 2 == 0) {
      let sum = Number(el1) + Number(el2);
      margedArr.push(sum);
    } else {
      let concatenation = el1 + el2;
      margedArr.push(concatenation);
    }
  }

  console.log(margedArr.join(" - "));
}
