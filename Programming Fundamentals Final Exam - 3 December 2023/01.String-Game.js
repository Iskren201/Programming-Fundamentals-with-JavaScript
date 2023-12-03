function executeCommands(input) {
  let inputStr = input[0];

  for (let i = 1; i < input.length; i++) {
    let command = input[i];
    let tokens = command.split(" ");

    switch (tokens[0]) {
      case "Change":
        let char = tokens[1];
        let replacement = tokens[2];
        inputStr = inputStr.split(char).join(replacement);
        console.log(inputStr);
        break;
      case "Includes":
        let substringIncludes = tokens[1];
        console.log(inputStr.includes(substringIncludes) ? "True" : "False");
        break;
      case "End":
        let substringEnd = tokens[1];
        console.log(inputStr.endsWith(substringEnd) ? "True" : "False");
        break;
      case "Uppercase":
        inputStr = inputStr.toUpperCase();
        console.log(inputStr);
        break;
      case "FindIndex":
        let findChar = tokens[1];
        let findIndex = inputStr.indexOf(findChar);
        console.log(findIndex);
        break;
      case "Cut":
        let startIndex = parseInt(tokens[1]);
        let count = parseInt(tokens[2]);
        let cutChars = inputStr.substr(startIndex, count);
        console.log(cutChars);
        break;
      case "Done":
        return;
      default:
        console.log("Invalid command");
    }
  }
}
