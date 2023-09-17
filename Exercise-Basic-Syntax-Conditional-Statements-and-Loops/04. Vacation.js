function slove  (count, type, day) {
    let singularPrice = 0;

    switch (day) {
        case "Friday":
            if (type == "Students") {
                singularPrice = 8.45;
            } else if (type == "Business") {
                singularPrice = 10.9;
            } else if (type == "Regular") {
                singularPrice = 15;
            }
            break;

        case "Saturday":
            if (type == "Students") {
                singularPrice = 9.8;
            } else if (type == "Business") {
                singularPrice = 15.6;
            } else if (type == "Regular") {
                singularPrice = 20;
            }
            break;

        case "Sunday":
            if (type == "Students") {
                singularPrice = 10.46;
            } else if (type == "Business") {
                singularPrice = 16;
            } else if (type == "Regular") {
                singularPrice = 22.5;
            }
            break;
    }

    let totalPrice = count * singularPrice;

    if (type == "Students" && count >= 30) {
        totalPrice *= 0.85;
    } else if (type == "Business" && count >= 100) {
        let discountedPrice = 10 * singularPrice;
        totalPrice -= discountedPrice;
    } else if (type == "Regular" && (count >= 10 && count <= 20)) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
};