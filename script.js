function isValidPrice(price) {
    return typeof price === "number" && price > 0;
}

function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}

function calculateDiscount(price, discountPercent) {
    if (!isValidPrice(price)) {
        return 0;
    }

    let discountAmount = (price * discountPercent) / 100;

    return price - discountAmount;
}

function calculateFinalBill(price, vatPercentage = 15) {
    let vat = (price * vatPercentage) / 100;

    return price + vat;
}

function formatBDT(amount) {
    return `${amount.toFixed(2)} BDT`;
}

function capitalized(str) {
    if (!str) {
        return "";
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
}

function processOrder(user, itemPrices, discountCode) {

    console.log(`Processing order for ${capitalized(user.name)}`);

    if (!isValidEmail(user.email)) {
        console.log("Error: Invalid user Email");
        return;
    }

    let currentPrice = itemPrices;

    if (discountCode === "NLB") {
        currentPrice = calculateDiscount(itemPrices, 20);

        console.log("20% discount applied");
    }

    let totalBill = calculateFinalBill(currentPrice);

    console.log(formatBDT(totalBill));

    console.log("Order completed successfully");
}


// User information
let user1 = {
    name: "shams",
    email: "shams@gmail.com"
};

let user2 = {
    name: "redwan",
    email: "redwan@gmail.com"
}


// Process the order
processOrder(user1, 2000, "NLB");
processOrder(user2, 3423, "NFs")