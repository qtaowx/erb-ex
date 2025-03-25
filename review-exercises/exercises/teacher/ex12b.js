// Using Set
const userEngagements = [
    { userId: 1, interactions: [{ productId: 101, type: "view" }, { productId: 102, type: "add_to_cart" }, { productId: 101, type: "view" }] },
    { userId: 2, interactions: [{ productId: 101, type: "view" }, { productId: 103, type: "purchase" }] },
    { userId: 1, interactions: [{ productId: 103, type: "view" }, { productId: 104, type: "view" }] }
];

const analyzeUserEngagements = (userEngagements) => {
    const engagementSummary = {};
    userEngagements.forEach(user => {
        const userId = user.userId;
        if (!engagementSummary[userId]) {
            engagementSummary[userId] = { uniqueProducts: new Set(), totalInteractions: 0 };
        }
        user.interactions.forEach(interaction => {
            engagementSummary[userId].uniqueProducts.add(interaction.productId);
            engagementSummary[userId].totalInteractions += 1;
        });
    });
    // engagementSummary[userId].uniqueProducts = Set(2) {101, 102};
    //  engagementSummary[userId].uniqueProducts.size // Get 2
    for (const userId in engagementSummary) {
        engagementSummary[userId].uniqueProducts = engagementSummary[userId].uniqueProducts.size;
    }
    return engagementSummary;
};

console.log(analyzeUserEngagements(userEngagements));
// Output:
// {
//     '1': { uniqueProducts: 4, totalInteractions: 5 },
//     '2': { uniqueProducts: 2, totalInteractions: 2 }
//   }