function createAndPrint(firstName, lastName, hairColor) {
  const obj = {
    name: firstName,
    lastName: lastName,
    hairColor: hairColor,
  };
  const jsonString = JSON.stringify(obj);
  console.log(jsonString);
}
createAndPrint("George", "Jones", "Brown");
