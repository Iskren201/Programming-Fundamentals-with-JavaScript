function slove(centuries) {
  let year = centuries * 100;
  let day = Math.trunc(year * 365.2422);
  let hours = 24 * day;
  let minutes = 60 * hours;

  console.log(
    `${centuries} centuries = ${year} years = ${day} days = ${hours} hours = ${minutes} minutes`
  );
}

slove(5);
