function slove(product, quantity) {
  const prices = {
    coffee: 1.5,
    water: 1.0,
    coke: 1.4,
    snacks: 2.0,
  };
  if (prices.hasOwnProperty(product)) {
    const pricePerUnit = prices[product];
    const totalPrice = pricePerUnit * quantity;
    console.log(totalPrice.toFixed(2));
  } else {
    console.log("Invalid product");
  }
}

slove("coffee", 1);
