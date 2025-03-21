// Simulated product data
const products = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Smartphone", price: 699.99 },
    { id: 3, name: "Wireless Headphones", price: 199.99 },
];

// Delay function to simulate wait time
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Mock function to simulate fetching product data
async function fetchProductData(id) {
    await delay(500); // Simulate a 500ms fetch time
    const product = products.find(p => p.id === id);
    if (!product) {
        throw new Error(`Product with ID ${id} not found.`);
    }
    return product;
}

// Function to fetch products sequentially
async function fetchProductsSequentially(productIds) {
    const fetchedProducts = [];
    for (const id of productIds) {
        await delay(1000); // 1 second delay between fetches
        try {
            const product = await fetchProductData(id);
            fetchedProducts.push(product);
            console.log('Fetched product:', product);
        } catch (error) {
            console.error(error.message);
        }
    }
    return fetchedProducts;
}

// Example usage
fetchProductsSequentially([1, 2, 3]).then(fetchedProducts => {
    console.log('All products fetched:', fetchedProducts);
});
// Output:
// Fetched product: { id: 1, name: 'Laptop', price: 999.99 }
// Fetched product: { id: 2, name: 'Smartphone', price: 699.99 }
// Fetched product: { id: 3, name: 'Wireless Headphones', price: 199.99 }
// All products fetched: [
//   { id: 1, name: 'Laptop', price: 999.99 },
//   { id: 2, name: 'Smartphone', price: 699.99 },
//   { id: 3, name: 'Wireless Headphones', price: 199.99 }
// ]