const reviews = [
    { productId: 101, reviews: [{ rating: 5, comment: "Excellent" }, { rating: 4, comment: "Very Good" }] },
    { productId: 102, reviews: [{ rating: 3, comment: "Average" }, { rating: 3, comment: "Average" }] },
    { productId: 101, reviews: [{ rating: 4, comment: "Very Good" }] },
    { productId: 103, reviews: [{ rating: 5, comment: "Excellent" }] }
];

const aggregatedReviews = {};

// Step 1: Aggregate reviews
reviews.forEach(({ productId, reviews }) => {
    // Initialize if product not in result
    if (!aggregatedReviews[productId]) {
        aggregatedReviews[productId] = {
            totalRating: 0,
            reviewCount: 0,
            commentFrequency: {}
        };
    }

    // Step 2: Iterate through the product reviews
    reviews.forEach(review => {
        // Update total rating and review count
        aggregatedReviews[productId].totalRating += review.rating;
        aggregatedReviews[productId].reviewCount += 1;

        // Track comment frequency
        const comment = review.comment;
        if (!aggregatedReviews[productId].commentFrequency[comment]) {
            aggregatedReviews[productId].commentFrequency[comment] = 1;
        } else {
            aggregatedReviews[productId].commentFrequency[comment]++;
        }
    });
});

console.log("aggregatedReviews", aggregatedReviews);

// Step 3: Calculate average ratings and most frequent comments
for (const productId in aggregatedReviews) {
    const { totalRating, reviewCount, commentFrequency } = aggregatedReviews[productId];

    // Calculate average rating
    const averageRating = totalRating / reviewCount;

    // Determine the most frequent comment
    let mostFrequentComment = '';
    let maxFrequency = 0;
    // e.g. { "Excellent": 1,  "Nice": 1 'Very Good': 2 }
    for (const comment in commentFrequency) {
        // 1st loop: comment = "Excellent"
        // if (1 > 0) { 
            // maxFrequency = 1
            // mostFrequentComment = "Excellent"
        // }

        // check frequency count is larger, and update below data
        if (commentFrequency[comment] > maxFrequency) {
            maxFrequency = commentFrequency[comment];
            mostFrequentComment = comment;
        }
    }

    // Store the results
    aggregatedReviews[productId] = {
        averageRating: averageRating.toFixed(2),
        totalReviews: reviewCount,
        mostFrequentComment: mostFrequentComment
    };
}

// Step 4: Output the result
console.log(aggregatedReviews);
// {
//     '101': {
//       averageRating: '4.33',
//       totalReviews: 3,
//       mostFrequentComment: 'Very Good'
//     },
//     '102': {
//       averageRating: '3.00',
//       totalReviews: 2,
//       mostFrequentComment: 'Average'
//     },
//     '103': {
//       averageRating: '5.00',
//       totalReviews: 1,
//       mostFrequentComment: 'Excellent'
//     }
//   }
  