function CookingMasterclass(input) {
  const budget = input[0];
  const students = input[1];
  const flourPrice = input[2];
  const eggPrice = input[3];
  const apronPrice = input[4];

  const totalApronPrice = apronPrice * Math.ceil(students * 1.2);
  const totalEggPrice = eggPrice * 10 * students;
  const freePackages = Math.floor(students / 5);
  const totalFlourPrice = flourPrice * (students - freePackages);

  const totalCost = totalApronPrice + totalEggPrice + totalFlourPrice;

  if (totalCost <= budget) {
    console.log(`Items purchased for ${totalCost.toFixed(2)}$.`);
  } else {
    const neededMoney = totalCost - budget;
    console.log(`${neededMoney.toFixed(2)}$ more needed.`);
  }
}

CookingMasterclass([50, 2, 1.0, 0.1, 10.0]);
