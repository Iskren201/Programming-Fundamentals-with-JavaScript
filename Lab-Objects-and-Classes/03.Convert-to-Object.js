function convertAndPrint(jsonString) {
  const obj = JSON.parse(jsonString);
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
}
