// Using Object
const userEngagements = [
    { userId: 1, interactions: [{ productId: 101, type: "view" }, { productId: 102, type: "add_to_cart" }, { productId: 101, type: "view" }] },
    { userId: 2, interactions: [{ productId: 101, type: "view" }, { productId: 103, type: "purchase" }] },
    { userId: 1, interactions: [{ productId: 103, type: "view" }, { productId: 104, type: "view" }] }
];

const analyzeUserEngagements = (userEngagements) => {
    const engagementSummary = {};

    userEngagements.forEach(user => {
        const userId = user.userId;

        // Initialize the user in the summary if not already present
        if (!engagementSummary[userId]) {
            engagementSummary[userId] = { uniqueProducts: {}, totalInteractions: 0 };
        }

        user.interactions.forEach(interaction => {
            const { productId } = interaction;

            // Track unique products using an object
            engagementSummary[userId].uniqueProducts[productId] = "test";

            // Count total interactions
            engagementSummary[userId].totalInteractions += 1;
        });
    });

    // Convert uniqueProducts from object to count for each user
    for (const userId in engagementSummary) {

        // engagementSummary[userId].uniqueProducts = {
        //     "101": "test",
        //     "102": "test",
        // }
        // Object.keys(engagementSummary[userId].uniqueProducts)
        // Object.keys({
        //     "101": "test",
        //     "102": "test",
        // })
        // ["101", "102"].length
        engagementSummary[userId].uniqueProducts = Object.keys(engagementSummary[userId].uniqueProducts).length;
    }

    return engagementSummary;
};

console.log(analyzeUserEngagements(userEngagements));
// Output:
// {
//     '1': { uniqueProducts: 4, totalInteractions: 5 },
//     '2': { uniqueProducts: 2, totalInteractions: 2 }
//   }
  