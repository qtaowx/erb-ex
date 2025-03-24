// CRUD http methods:
// Create -> POST
// Read -> GET
// Update -> PUT
// Delete -> DELETE

// Client - front end, send http request(get, post, put, delete) to server
// Server - back end, send responce to client

// 如何用postman做debug
// https://blog.csdn.net/K346K346/article/details/112354614

// const orders = [
//     { customerId: 1, amount: 250 },
//     { customerId: 2, amount: 150 },
//     { customerId: 1, amount: 200 },
//     { customerId: 3, amount: 300 }
// ];

// let obj = {};
// orders.forEach(order => {
//     if(obj[order.customerId]){
//         obj[order.customerId] += order.amount;
//     }else{
//         obj[order.customerId] = order.amount;
//     }
// });

// console.log(obj);

// Retrieve Unique Products IDs
const orders = [
    { products: [1, 2, 3] },
    { products: [2, 4] },
    { products: [1, 5] }
];

let arr = [];
orders.forEach(order => {
    order.products.forEach(id =>{
        if(!arr.includes(id)){ // includes()方法返回布尔值，表示是否找到了在数组中指定的元素。
            arr.push(id);
        }
    });
})
console.log(arr);

// Or use Set
let set = new Set();
orders.forEach(order => {
    order.products.forEach(id =>{
        set.add(id);
    });
})

console.log([...set]);

const orders2 = [
    { customerId: 1, orderDetails: [{ items: [{ productId: 101, amount: 50 }, { productId: 102, amount: 150 }] }] },
    { customerId: 2, orderDetails: [{ items: [{ productId: 103, amount: 200 }] }] },
    { customerId: 1, orderDetails: [{ items: [{ productId: 101, amount: 100 }] }] },
    { customerId: 3, orderDetails: [{ items: [{ productId: 104, amount: 300 }, { productId: 105, amount: 150 }] }] }
];

let obj2 = {};

orders2.forEach(order => {
    obj2[order.customerId] = obj2[order.customerId] || 0; // 保证obj2[order.customerId]存在，初始值为0
    obj2[order.customerId] += order.orderDetails[0].items.reduce((sum, item) => sum + item.amount, 0);
    // if(!obj2[order.customerId]){
    //     obj2[order.customerId] = order.orderDetails[0].items.reduce((sum, item) => sum + item.amount, 0);
    // }else{
    //     obj2[order.customerId] += order.orderDetails[0].items.reduce((sum, item) => sum + item.amount, 0);
    // }
});

console.log(obj2);