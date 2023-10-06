function slove(x, n) {
  let pow = 1;

  for (let i = 0; i < n; i++) {
    pow = pow * x;
  }

  console.log(pow);
}

slove(2, 8);
