const customerPurchases = [
    { customerId: 1, orders: [{ amount: 500 }, { amount: 300 }] },
    { customerId: 2, orders: [{ amount: 200 }] },
    { customerId: 3, orders: [{ amount: 700 }, { amount: 100 }] },
    { customerId: 1, orders: [{ amount: 200 }] }
];

const totalSpending = {};

// Step 1: Calculate total spending for each customer
customerPurchases.forEach(({ customerId, orders }) => {
    // Initialize total for the customer if not already done
    if (!totalSpending[customerId]) {
        totalSpending[customerId] = 0;
    }

    // Sum the amounts from orders
    orders.forEach(order => {
        totalSpending[customerId] += order.amount;
    });
});

// Step 2: Define loyalty tiers based on total spending
const loyaltyTiers = {};
// for loop about object
for (const customerId in totalSpending) {
    const spending = totalSpending[customerId];

    let tier;
    if (spending >= 700) {
        tier = 'Gold';
    } else if (spending >= 300) {
        tier = 'Silver';
    } else {
        tier = 'Bronze';
    }

    loyaltyTiers[customerId] = { totalSpending: spending, loyaltyTier: tier };
}

// Output the result
console.log(loyaltyTiers);
// Output:
// {
//     '1': { totalSpending: 1000, loyaltyTier: 'Gold' }, // Gold: Spending >= 700
//     '2': { totalSpending: 200, loyaltyTier: 'Bronze' }, // Bronze: Spending < 300
//     '3': { totalSpending: 800, loyaltyTier: 'Gold' } // Gold: Spending >= 700
// }
