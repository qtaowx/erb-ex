const inventory = [
    { category: "Electronics", subcategories: [{ name: "Phones", items: [{ id: 1, stock: 10 }, { id: 2, stock: 5 }] }] },
    { category: "Laptops", subcategories: [{ name: "Gaming", items: [{ id: 3, stock: 2 }] }] },
    { category: "Home Appliances", subcategories: [{ name: "Refrigerators", items: [{ id: 4, stock: 0 }, { id: 5, stock: 3 }] }] }
];

const analyzeInventory = (inventory) => {
    const stockCounts = {};
    inventory.forEach(category => {
        category.subcategories.forEach(subcategory => {
            subcategory.items.forEach(item => {
                stockCounts[item.id] = item.stock;
            });
        });
    });
    return stockCounts;
};

console.log(analyzeInventory(inventory));
// Output: