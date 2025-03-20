// Exercise 1: Product Fetch with Error Handling
function fetchProductDataById(productId) {
    return new Promise((resolve, reject) => {
        if(productId < 1){
            reject("Invalid product ID");
            return;
        }
        const product = { id: 1, name: "Shirt", price: 19.99 };
        resolve(product);
    });
}

fetchProductDataById(-1)
.then((res) => {
    console.log(res);
})
.catch(err =>{
    console.log("------- Ex 1 ----------")
    console.error(err);
})

// Exercise 2: Bulk Product Fetch with Error Handling
function fetchProductData(productId) {
    const products = [
        { id: 1, name: "Shirt", price: 19.99 },
        { id: 2, name: "Pants", price: 29.99 },
        { id: 3, name: "Shoes", price: 49.99 },
    ];
    return new Promise((resolve, reject) => {
        if(productId < 1){
            resolve("Invalid product ID:"+productId);
            return;
        }
        const product = products.find(p => p.id === productId);
        if(!product){
            resolve("Product not found");
            return;
        }
        resolve(product);
    })
}


function fetchProducts(arr){
    var promises = [];
    for(let i = 0; i < arr.length; i++) {
        promises.push(fetchProductData(arr[i]));
    }
    return Promise.all(promises)
    .then(res => {
        console.log("------- Ex 2 ----------")
        console.log(...res);
    })
    .catch(err => {
        console.log("Error fetching products:",err);
    })
}

fetchProducts([1, -2, 3])

// Exercise 3: Updating Product Inventory with Promise
let inventory = [
    { id: 1, name: "Shirt", quantity: 10 },
    { id: 2, name: "Pants", quantity: 5 },
    { id: 3, name: "Shoes", quantity: 3 },
];
function updateProductInventory(productId, quantity) {
    return new Promise((resolve, reject) => {
        if(productId < 1){
            reject("Invalid product ID");
            return;
        }
        let item = inventory.find(product => product.id === productId);
        if(!item){
            reject("Product not found");
            return;
        }
        item.quantity += quantity;
        if(item.quantity < 0){
            item.quantity = 0;
            reject("Cannot update inventory: quantity cannot be negative");
            return;
        }
        let msg =`Updated inventory for product ID ${productId} by ${quantity}`;
        resolve(msg);
    })
}

updateProductInventory(2, 5)
.then((msg) => {
    console.log("------- Ex 3 ----------")
    console.log(msg);
    console.log(inventory);
})
.catch(err => {console.error(err);})

updateProductInventory(3, -4)
.then((msg) => {
    console.log(msg);
    console.log(inventory);
})
.catch(err => {console.error(err);})

// Exercise 4: Fetching User Data and Their Posts
let users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
]
let posts = [
    { postId: 1, userId: 1, content: "hahahaha." },
    { postId: 2, userId: 2, content: "~~~." },
    { postId: 3, userId: 3, content: "Hello." },
    { postId: 4, userId: 1, content: "cheers." },
];
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(userId < 1){
                console.log("------- Ex 4 ----------")
                reject("Invalid user ID");
                return;
            }
            let user = users.find(user => user.id === userId);
            resolve(user);
        },1000)
    })
}

function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(userId < 1){
                reject("Invalid user ID");
                return;
            }
            let post = posts.filter(post => post.userId === userId);
            if(post.length > 0){
                resolve(`Fetched posts for user ID: ${userId} with content: ${post.map(post =>post.content)} `);
            }else{
                reject(`No posts found for user ID: ${userId}`);
            }
        },1500)
    })
}

function fetchUserDetails(userId) {
    try{
        return Promise.all([fetchUserData(userId), fetchUserPosts(userId)])
        .then(([user, posts]) => {
            console.log(`User Details:`, user);
            console.log(`User Posts:`, posts);
        })
        .catch(err => {console.error("Error fetching user details: "+err);})
    }catch(error){
        console.log(`Error:, ${error.message}`);
    }
}

fetchUserDetails(-1)
fetchUserDetails(1)
fetchUserDetails(5)

// Exercise 5: Fetch Product Data
function fetchProdData(prodId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(prodId < 1){
                reject("Invalid product ID:"+prodId);
                return;
            }
            const product = { id: 1, name: "TV", price: 1999.99 };
            resolve(product);
        },3000)
    })
}
async function getProduct(prodId){
    try{
        const data = await fetchProdData(prodId);
        console.log("------- Ex 5 ----------")
        console.log(data);
    }catch(error){
        console.error(error);
    }
}

getProduct(0);
getProduct(1);

// Exercise 6: Add to Cart
const products = [
    { id: 1, name: "Laptop", price: 999.99, inStock: 10 },
    { id: 2, name: "Smartphone", price: 699.99, inStock: 5 },
    { id: 3, name: "Wireless Headphones", price: 199.99, inStock: 0 },
];
let cart = [];
async function addToCart(productId, quantity) {
    try{
        const product = products.find(p => p.id === productId);
        if(!product){
            console.error(`Product ID ${productId} not found.`);
            return;
        }
        if(product.inStock < quantity){
            console.error(`Not enough stock for product ID ${productId}. Only ${product.inStock} available.`);
            return;
        }
        const cartItem = cart.find(item => item.productId === productId);
        if(!cartItem){
            cart.push({productId, quantity});
            console.log("------- Ex 6 ----------")
            console.log(`Added ${quantity} of ${product.name} to cart.`);
        }else{
            cartItem.quantity += quantity;
            console.log(`Updated ${quantity} of ${product.name} to cart.`);
        }
        console.log("Cart:", cart);
    }catch(error){
        console.error(error);
    }
}

await addToCart(1, 2);
await addToCart(1, 1);
await addToCart(2, 1);
await addToCart(3, 1);

// Exercise 7: View Cart
const productsv = [
    { id: 1, name: "Laptop", price: 999.99, inStock: 10 },
    { id: 2, name: "Smartphone", price: 699.99, inStock: 5 },
    { id: 3, name: "Wireless Headphones", price: 199.99, inStock: 0 },
];

const cartv = [
    { productId: 1, quantity: 1 },
    { productId: 2, quantity: 2 },
    { productId: 3, quantity: 1 },
];

async function viewCart() {
    let total = 0;
    cartv.forEach(product => {
       let name = productsv.find(p => p.id === product.productId).name;
       let price = productsv.find(p => p.id === product.productId).price;
       let quantity = product.quantity;
       let cost = price * quantity;
       total += cost;
       console.log("------- Ex 7 ----------")
       console.log(`name:${name} quantity: ${quantity}, total price: $${cost.toFixed(2)}`);
    })
    console.log("Total cost:", total);
}

await viewCart();

// Exercise 8: Mock Payment Function
async function processPayment(totalAmount){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(totalAmount < 0){
                reject("Invalid payment amount");
                return;
            }
            console.log("------- Ex 8 ----------")
            resolve(`Payment of ${totalAmount.toFixed(2)} processed successfully.`)
        },1000);
    });
}

// let msg = await processPayment(100);

// console.log("msg:",msg);

// use LIFE
(async () => {
    const messgae = await processPayment(150.7);
    console.log("message:", messgae);
})();

// Exercise 9: Sequential Fetch with Controlled Flow
const productsList =[
    { id: 1, name: "Laptop", price: 999.99},
    { id: 2, name: "Smartphone", price: 699.99},
    { id: 3, name: "Wireless Headphones", price: 199.99},
    { id: 4, name: "Mouse", price: 49.99},
    { id: 5, name: "Keyboard", price: 99.99}
]
async function fetchProductsSequentially(productIds) {
    for(let productId of productIds){
        await delay(1000); // 程序会等待1秒再向下执行,await的外部环境必须是async
        console.log("------- Ex 9 ----------")
        let product = productsList.find(p => p.id === productId);
        if(!product){
            console.error(`Product ID ${productId} not found.`);
            continue; // 本次循环执行到此为止，继续下一次循环
        }
        console.log(`Fetched product ID: ${productId} with name: ${product.name}`);
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

fetchProductsSequentially([1,2,3,6,5]);

// teacher's
// fetchProductsSequentially([1,2,3,6,5]).then((products) =>{
//     // ....
// })