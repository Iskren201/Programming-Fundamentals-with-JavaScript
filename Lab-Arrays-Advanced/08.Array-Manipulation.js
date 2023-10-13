function slove(input) {
  let array = input.shift().split(" ").map(Number);

  for (let command of input) {
    let [action, value, index] = command.split(" ");

    switch (action) {
      case "Add":
        array.push(Number(value));
        break;
      case "Remove":
        array = array.filter((el) => el !== Number(value));
        break;
      case "RemoveAt":
        array.splice(Number(value), 1);
        break;
      case "Insert":
        array.splice(Number(index), 0, Number(value));
        break;
      default:
        break;
    }
  }

  console.log(array.join(" "));
}

slove(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);
