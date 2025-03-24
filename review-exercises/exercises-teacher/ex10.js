const userInteractions = [
    { userId: 1, interactions: [{ productId: 101, type: "view" }, { productId: 102, type: "add_to_cart" }] },
    { userId: 2, interactions: [{ productId: 101, type: "purchase" }] },
    { userId: 1, interactions: [{ productId: 103, type: "view" }, { productId: 101, type: "view" }] }
];

function analyzeUserInteractions(userInteractions) {
    const result = {};

    userInteractions.forEach(user => {
        user.interactions.forEach(interaction => {
            const productId = interaction.productId;
            if (result[productId]) { // check undefined value
                result[productId]++;
            } else {
                result[productId] = 1; // if undefined value, by default, assign 1 as value
            }
        });
    });

    return result;
}

const interactionCount = analyzeUserInteractions(userInteractions);
console.log(interactionCount);
// {
//     101: 3,
//     102: 1,
//     103: 1
// }
