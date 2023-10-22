function slove(prices, entryPoint, type) {
  let leftSum = 0;
  let rightSum = 0;
  let entryPrice = prices[entryPoint];

  if (type === "cheap") {
    for (let i = 0; i < entryPoint; i++) {
      if (prices[i] < entryPrice) {
        leftSum += prices[i];
      }
    }
    for (let i = entryPoint + 1; i < prices.length; i++) {
      if (prices[i] < entryPrice) {
        rightSum += prices[i];
      }
    }
  } else if (type === "expensive") {
    for (let i = 0; i < entryPoint; i++) {
      if (prices[i] >= entryPrice) {
        leftSum += prices[i];
      }
    }
    for (let i = entryPoint + 1; i < prices.length; i++) {
      if (prices[i] >= entryPrice) {
        rightSum += prices[i];
      }
    }
  }

  if (leftSum >= rightSum) {
    console.log(`Left - ${leftSum}`);
  } else {
    console.log(`Right - ${rightSum}`);
  }
}

slove(([1, 5, 1], 1, "cheap"));
