// Simulated products
const products = [
    { id: 1, name: "Laptop", price: 999.99, inStock: 10 },
    { id: 2, name: "Smartphone", price: 699.99, inStock: 5 },
    { id: 3, name: "Wireless Headphones", price: 199.99, inStock: 0 },
];

// Example cart with product IDs and quantities
const cart = [
    { productId: 1, quantity: 1 }, // 1 Laptop
    { productId: 2, quantity: 2 }, // 2 Smartphones
    { productId: 3, quantity: 1 }, // 1 Wireless Headphones
];

async function viewCart() {
    let total = 0;
    console.log("Shopping Cart:");

    for (const item of cart) {
        const product = products.find(p => p.id === item.productId);
        if (product) {
            const itemTotal = product.price * item.quantity;
            total += itemTotal;
            console.log(`${product.name} (x${item.quantity}): $${itemTotal.toFixed(2)}`);
        } else {
            console.error(`Product ID ${item.productId} not found.`);
        }
    }

    console.log(`Total: $${total.toFixed(2)}`);
}

// Example usage
await viewCart(); // Displays the current contents of the cart

// Output:
// Shopping Cart:
// Laptop (x1): $999.99
// Smartphone (x2): $1399.98
// Wireless Headphones (x1): $199.99
// Total: $2599.96