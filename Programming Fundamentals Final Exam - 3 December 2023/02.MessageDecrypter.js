function slove(inputs) {
  function isValidMessage(input) {
    const regex =
      /^([$%])([A-Z][a-z]{2,})\1:\s\[([0-9]+)\]\|\[([0-9]+)\]\|\[([0-9]+)\]\|$/;

    const match = input.match(regex);

    if (match) {
      const tag = match[2];
      const decryptedMessage = String.fromCharCode(
        match[3],
        match[4],
        match[5]
      );
      // Print the result within the function
      console.log(`${tag}: ${decryptedMessage}`);
    } else {
      // Print the result within the function
      console.log("Valid message not found!");
    }
  }

  const n = parseInt(inputs[0]);

  for (let i = 1; i <= n; i++) {
    isValidMessage(inputs[i]);
  }
}

slove([
  "4",
  "$Request$: [73]|[115]|[105]|",
  "%Taggy$: [73]|[73]|[73]|",
  "%Taggy%: [118]|[97]|[108]|",
  "$Request$: [73]|[115]|[105]|[32]|[75]|",
]);
