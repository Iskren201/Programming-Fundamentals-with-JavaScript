function slove(input) {
    let username = input[0];
    let pass = '';

    for (let i = username.length - 1; i >= 0; i--) {
        pass += username[i];

    };
    let guess = input[1];
    let index = 2;
    let wrongAttempts = 0;

    while (guess != pass) {
        wrongAttempts++;

        if (wrongAttempts == 4) {
            console.log(`User ${username} blocked!`);
            return;
        }

        console.log("Incorrect password. Try again.");

        guess = input[index];
        index++;
    }
    console.log(`User ${username} logged in.`);

};