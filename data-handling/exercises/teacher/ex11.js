const salesRecords = [
    { categoryId: 1, sales: [{ productId: 101, quantity: 2, price: 50 }, { productId: 102, quantity: 1, price: 150 }] },
    { categoryId: 1, sales: [{ productId: 101, quantity: 1, price: 50 }] },
    { categoryId: 2, sales: [{ productId: 103, quantity: 3, price: 200 }] },
    { categoryId: 2, sales: [{ productId: 102, quantity: 2, price: 150 }] }
];

const salesPerformanceDashboard = (salesRecords) => {
    const performance = {};
    salesRecords.forEach(record => {
        record.sales.forEach(sale => {
            const { productId, quantity, price } = sale;
            if (!performance[productId]) {
                performance[productId] = { totalSales: 0, totalQuantity: 0, averagePrice: 0 };
            }
            performance[productId].totalSales += quantity * price;
            performance[productId].totalQuantity += quantity;
            performance[productId].averagePrice = performance[productId].totalSales / performance[productId].totalQuantity;
        });
    });
    return performance;
};

console.log(salesPerformanceDashboard(salesRecords));