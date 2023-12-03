function manageMessages(input) {
  const capacity = Number(input.shift());
  const users = {};

  for (const line of input) {
    if (line === "Statistics") {
      break;
    }

    const [command, username, sent, received] = line
      .split(/[=]+/)
      .filter(Boolean);

    switch (command) {
      case "Add":
        if (!users.hasOwnProperty(username)) {
          users[username] = { sent: Number(sent), received: Number(received) };
        }
        break;

      case "Message":
        if (users.hasOwnProperty(username) && users.hasOwnProperty(received)) {
          if (users[username].sent + users[username].received >= capacity) {
            console.log(`${username} reached the capacity!`);
            delete users[username];
          } else {
            users[username].sent++;
          }

          if (users[received].sent + users[received].received >= capacity) {
            console.log(`${received} reached the capacity!`);
            delete users[received];
          } else {
            users[received].received++;
          }
        }
        break;

      case "Empty":
        if (username === "All") {
          for (const user in users) {
            delete users[user];
          }
        } else {
          delete users[username];
        }
        break;
    }
  }

  const totalCount = Object.keys(users).length;
  console.log(`Users count: ${totalCount}`);

  for (const [user, messages] of Object.entries(users)) {
    console.log(`${user} - ${messages.sent + messages.received}`);
  }
}

// Примерно използване:
manageMessages([
  "10",
  "Add=Berg=9=0",
  "Add=Kevin=0=0",
  "Message=Berg=Kevin",
  "Add=Mark=5=4",
  "Statistics",
]);
