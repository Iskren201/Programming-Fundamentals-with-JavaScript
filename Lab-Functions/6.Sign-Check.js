function slove(numOne, numTwo, numThree) {
  const negativeCount = [numOne, numTwo, numThree].filter(
    (num) => num < 0
  ).length;

  if (negativeCount % 2 === 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}

slove(
  5,

  12,

  -15
);
