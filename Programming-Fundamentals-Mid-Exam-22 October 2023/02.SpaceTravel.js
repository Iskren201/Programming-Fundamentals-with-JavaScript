function solve(input) {
  const commands = input[0].split("||");
  let fuel = Number(input[1]);
  let ammunition = Number(input[2]);

  for (let i = 0; i < commands.length; i++) {
    const currentCommand = commands[i].split(" ");
    const command = currentCommand[0];

    if (command === "Travel") {
      const distance = Number(currentCommand[1]);
      if (fuel >= distance) {
        fuel -= distance;
        console.log(`The spaceship travelled ${distance} light-years.`);
      } else {
        console.log("Mission failed.");
        return;
      }
    } else if (command === "Enemy") {
      const enemyArmour = Number(currentCommand[1]);
      if (ammunition >= enemyArmour) {
        ammunition -= enemyArmour;
        console.log(`An enemy with ${enemyArmour} armour is defeated.`);
      } else if (fuel >= 2 * enemyArmour) {
        fuel -= 2 * enemyArmour;
        console.log(`An enemy with ${enemyArmour} armour is outmaneuvered.`);
      } else {
        console.log("Mission failed.");
        return;
      }
    } else if (command === "Repair") {
      const addedAmmunitions = Number(currentCommand[1]);
      const addedFuel = Number(currentCommand[1]);
      ammunition += addedAmmunitions * 2;
      fuel += addedFuel;
      console.log(`Ammunitions added: ${addedAmmunitions * 2}.`);
      console.log(`Fuel added: ${addedFuel}.`);
    } else if (command === "Titan") {
      console.log("You have reached Titan, all passengers are safe.");
      return;
    }
  }
}

solve(["Travel 10||Enemy 30||Repair 15 0||Titan", "50", "80"]);
