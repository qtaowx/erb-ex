// Simulated products
const products = [
    { id: 1, name: "Laptop", price: 999.99, inStock: 10 },
    { id: 2, name: "Smartphone", price: 699.99, inStock: 5 },
    { id: 3, name: "Wireless Headphones", price: 199.99, inStock: 0 },
];

let cart = [];

async function addToCart(productId, quantity) {
    try {
        // Check if quantity is valid
        if (quantity <= 0) {
            console.error("Error: Quantity must be greater than zero.");
            return;
        }

        const product = products.find(p => p.id === productId);
        
        // Check if product exists
        if (!product) {
            console.error(`Error: Product ID ${productId} not found.`);
            return;
        }
        
        // Check stock availability
        if (product.inStock < quantity) {
            console.error(`Error: Insufficient stock for ${product.name}. Available: ${product.inStock}, Requested: ${quantity}`);
            return;
        }

        // Manage cart items
        const cartItem = cart.find(item => item.productId === productId);
        if (cartItem) {
            cartItem.quantity += quantity;
            console.log(`Success: Updated ${cartItem.quantity} of ${product.name} in the cart.`);
        } else {
            cart.push({ productId, quantity });
            console.log(`Success: Added ${quantity} of ${product.name} to the cart.`);
        }
    } catch (error) {
        console.log("error", error);

    }
}


// Example usage
await addToCart(1, 2); // Add 2 laptops to the cart
await addToCart(2, 1); // Add 1 smartphone to the cart
await addToCart(3, 1); // Attempt to add 1 wireless headphone (out of stock)
await addToCart(1, 0); // Attempt to add 0 laptops (invalid quantity)
await addToCart(4, 10); // Attempt to add non-existing product

// Output:
// Success: Added 2 of Laptop to the cart.
// Success: Added 1 of Smartphone to the cart.
// Error: Insufficient stock for Wireless Headphones. Available: 0, Requested: 1
// Error: Quantity must be greater than zero.
// Error: Product ID 4 not found.
