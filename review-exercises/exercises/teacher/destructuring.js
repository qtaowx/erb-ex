// Destructuring
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring

// Example object
const obj = {
    b: 20
};

// Destructuring with default values
const { a: a1 = 'aDefault', b = 'bDefault' } = obj;

console.log(a1); // Output: 'aDefault' (because 'a' is not defined in obj)
console.log(b);  // Output: 20 (because 'b' is defined in obj)
