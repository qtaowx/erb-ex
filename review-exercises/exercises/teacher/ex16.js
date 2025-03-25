
const customerData = [
    {
        customerId: 1,
        journeys: [
            {
                interactions: [{ productId: 101, type: "view" }, { productId: 102, type: "add_to_cart" }],
                purchases: [{ productId: 101, amount: 100 }],
                feedback: [{ productId: 101, rating: 5 }]
            },
            {
                interactions: [{ productId: 103, type: "view" }],
                purchases: [],
                feedback: []
            }
        ]
    },
    {
        customerId: 2,
        journeys: [
            {
                interactions: [{ productId: 101, type: "view" }],
                purchases: [{ productId: 102, amount: 150 }],
                feedback: [{ productId: 102, rating: 4 }]
            },
            {
                interactions: [{ productId: 104, type: "view" }, { productId: 105, type: "add_to_cart" }],
                purchases: [{ productId: 105, amount: 200 }],
                feedback: [{ productId: 104, rating: 3 }]
            }
        ]
    }
];

function mapCustomerJourneys(customerData) {
    const customerSummary = {};

    customerData.forEach(customer => {
        const customerId = customer.customerId;
        let totalInteractions = 0;
        const uniqueProducts = new Set();
        let totalRatings = 0;
        let ratingCount = 0;

        customer.journeys.forEach(journey => {
            totalInteractions += journey.interactions.length;

            journey.interactions.forEach(interaction => {
                uniqueProducts.add(interaction.productId);
            });

            journey.purchases.forEach(purchase => {
                uniqueProducts.add(purchase.productId);
            });

            journey.feedback.forEach(feedback => {
                totalRatings += feedback.rating;
                ratingCount++;
            });
        });

        const averageRating = ratingCount > 0 ? totalRatings / ratingCount : 0;

        customerSummary[customerId] = {
            totalInteractions,
            uniqueProductsViewedOrPurchased: uniqueProducts.size,
            averageFeedbackRating: averageRating
        };
    });

    return customerSummary;
}

const journeySummary = mapCustomerJourneys(customerData);
console.log(journeySummary);
// {
//     '1': {
//       totalInteractions: 3,
//       uniqueProductsViewedOrPurchased: 3,
//       averageFeedbackRating: 5
//     },
//     '2': {
//       totalInteractions: 3,
//       uniqueProductsViewedOrPurchased: 4,
//       averageFeedbackRating: 3.5
//     }
//   }