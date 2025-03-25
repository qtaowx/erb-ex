const purchases = [
    { customerId: 1, items: [{ productId: 101 }, { productId: 102 }] },
    { customerId: 2, items: [{ productId: 101 }, { productId: 103 }] },
    { customerId: 3, items: [{ productId: 102 }, { productId: 103 }] },
    { customerId: 1, items: [{ productId: 104 }, { productId: 101 }] }
];

// 101,102 -> 101,102
// 101,103 -> 101,103
// 102,103 -> 102,103
// 104,101 -> 101,104 (Using sort())

const identifyProductBundles = (purchases) => {
    const bundles = {};
    purchases.forEach(purchase => {
        // [101, 102].sort() => [101,102] // array of integer
        // productIds = [101, 102].join(',') => 101 + "," + 102 // Get "101,102"
            // if number + number => number (e.g. 1+1 = 2)
            // if number + string => string (e.g. 1+"," = "1,")
            // if string + string => string (e.g. "a" + "b" = "ab")
        const productIds = purchase.items.map(item => item.productId).sort().join(',');
        if (!bundles[productIds]) {
            bundles[productIds] = 0;
        }
        bundles[productIds] += 1;
    });
    return bundles;
};

console.log(identifyProductBundles(purchases));
// { '101,102': 1, '101,103': 1, '102,103': 1, '101,104': 1 }
