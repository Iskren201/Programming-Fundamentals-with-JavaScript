function city(obj) {
  for (var key in obj) {
    console.log(`${key} -> ${obj[key]}`);
  }
}

// Example usage:
var city1 = {
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
};
city(city1);

var city2 = {
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000",
};
city(city2);
