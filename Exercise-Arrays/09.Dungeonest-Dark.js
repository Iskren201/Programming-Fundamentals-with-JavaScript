function slove(arr) {
  let roomsInfo = arr[0];
  let rooms = roomsInfo.split("|");

  let health = 100;
  let coins = 0;

  let bestRoom = 1;

  for (let room of rooms) {
    let tokens = room.split(" ");

    let command = tokens[0];
    let num = Number(tokens[1]);

    if (command == "potion") {
      let newHP = health + num <= 100 ? num : 100 - health;
      health += newHP;
      console.log(`You heald for ${newHP} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command == "chest") {
      coins += num;
      console.log(`You found ${num} coins.`);
    } else {
      health -= num;
      if (health > 0) {
        console.log(`You slayed ${command}.`);
      } else {
        console.log(`You ddied! Killed by ${command}.`);
        console.log(` ${bestRoom}.`);
      }
    }

    bestRoom++;
  }
  if (health > 0) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Best room ${bestRoom}`);
  }
}
