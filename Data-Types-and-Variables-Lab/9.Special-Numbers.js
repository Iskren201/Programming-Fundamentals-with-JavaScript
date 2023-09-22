function slove(n) {
  let answer = "";
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum = (i % 10) + parseInt(i / 10);

    answer = sum === 5 || sum === 7 || sum === 11;
    console.log(answer ? `${i} -> True` : `${i} -> False`);
    sum = 0;
  }
}

slove(35);
