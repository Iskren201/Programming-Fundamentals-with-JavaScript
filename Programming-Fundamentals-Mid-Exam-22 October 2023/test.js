function spaceShip(input) {
  let commands = input[0].split("|");
  let startingFuel = Number(input[1]);
  let startingAmmunition = Number(input[2]);

  let currentFuel = startingFuel;
  let currentAmmunition = startingAmmunition;

  for (let command of commands) {
    let [action, value] = command.split(" ");

    if (action === "Travel") {
      let distance = Number(value);
      if (currentFuel >= distance) {
        currentFuel -= distance;
        console.log(`The spaceship travelled ${distance} light-years.`);
      } else {
        console.log("Mission failed.");
        return;
      }
    } else if (action === "Enemy") {
      let enemyArmour = Number(value);
      if (currentAmmunition >= enemyArmour) {
        currentAmmunition -= enemyArmour;
        console.log(`An enemy with ${enemyArmour} armour is defeated.`);
      } else if (currentFuel >= 2 * enemyArmour) {
        currentFuel -= 2 * enemyArmour;
        console.log(`An enemy with ${enemyArmour} armour is outmaneuvered.`);
      } else {
        console.log("Mission failed.");
        return;
      }
    } else if (action === "Repair") {
      let [ammunitionToAdd, fuelToAdd] = value.split("|");
      currentAmmunition += 2 * Number(ammunitionToAdd);
      currentFuel += Number(fuelToAdd);
      console.log(`Ammunitions added: ${2 * Number(ammunitionToAdd)}.`);
      console.log(`Fuel added: ${fuelToAdd}.`);
    } else if (action === "Titan") {
      console.log("You have reached Titan, all passengers are safe.");
      return;
    }
  }
  console.log("Mission successful.");
}

spaceShip([
  "Travel 20|Enemy 50|Enemy 50|Enemy 10|Repair 15|0|Enemy 50|Titan",
  "60",
  "100",
]);
