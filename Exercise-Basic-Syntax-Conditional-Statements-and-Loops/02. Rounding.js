function slove(number, precision) {
  precision = Math.min(15, Math.max(0, precision));

  const multiplier = Math.pow(10, precision);

  const roundedNumber = parseFloat(
    (Math.round(number * multiplier) / multiplier).toFixed(precision)
  );

  console.log(roundedNumber);
}