// Using Array
const analyzeUserEngagements = (userEngagements) => {
    const engagementSummary = {};

    userEngagements.forEach(user => {
        const userId = user.userId;

        // Initialize the user in the summary if not already present
        if (!engagementSummary[userId]) {
            engagementSummary[userId] = { uniqueProducts: [], totalInteractions: 0 };
        }

        user.interactions.forEach(interaction => {
            const productId = interaction.productId;

            // [1,2,3].includes(1) // true
            // [1,2,3].includes(4) // false

            // Track unique products using an array
            if (!engagementSummary[userId].uniqueProducts.includes(productId)) {
                engagementSummary[userId].uniqueProducts.push(productId);
            }

            // Count total interactions
            engagementSummary[userId].totalInteractions += 1;
        });
    });

    // Convert uniqueProducts to count for each user
    for (const userId in engagementSummary) {
        engagementSummary[userId].uniqueProducts = engagementSummary[userId].uniqueProducts.length;
    }

    return engagementSummary;
};

console.log(analyzeUserEngagements(userEngagements));
// Output:
// {
//     '1': { uniqueProducts: 4, totalInteractions: 5 },
//     '2': { uniqueProducts: 2, totalInteractions: 2 }
//   }