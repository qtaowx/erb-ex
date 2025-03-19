// https://www.casper.tw/development/2020/10/16/async-await/

// Example 1: Resolving with a String
function sayHello(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const greeting = 'Hello, World!';
      resolve(greeting);
      // reject('Timeout exceeded');
    },1000)
  })
}

sayHello()
  .then(message => {
    console.log(message); // Hello, World!
  })
  .catch(error =>{
    console.log(error); // Error: Timeout exceeded
  });

// Example 2: Resolving with an Object
function getUser() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const user = { id: 1, name: "Alice" }; // Object to resolve
          resolve(user);
      }, 1000); // Simulates a 1-second delay
  });
}


getUser()
  .then(user => {
      console.log(user); // Output: { id: 1, name: "Alice" }
  });

//Example 3: Rejecting with an Error Object
function fetchData(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false; // Change this to true to simulate success
      if(success){
        resolve("Data fetched successfully");
      }else{
        reject(new Error("Failed to fetch data"));  // Rejecting with an Error object
      }

    }, 1000); // Simulates a 1-second delay
  })
}

fetchData()
 .catch(error => {
   console.error(error.message); // Output: Failed to fetch data
 })

// Example 4: Resolving with an Array
function fetchItems(){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      const items = ["Apple", "Banana", "Cherry"];
      resolve(items);
    },1000)
  })
}

fetchItems()
.then(items => {
  console.log(items); // Output: ["Apple", "Banana", "Cherry"]
})

// Example 5: Rejecting with a String
function divideNumbers(num1, num2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(num2 === 0){
        reject("Cannot divide by zero");
      } else {
        resolve(num1 / num2);
      }
    }, 1000); // Simulates a 1-second delay
  })
}

divideNumbers(10, 0)
.then(result => {
  console.log(result); 
})
.catch(error => {
  console.error(error); // Output: Cannot divide by zero
})

// Example 6: Resolving with Another Promise- Promise.all()
function fetchProfile() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("Profile data"); // Resolving with a string
      }, 1000); // Simulates a 1-second delay
  });
}


function fetchUser() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve({ id: 1, name: "Bob" }); // Resolving with an object
      }, 1000); // Simulates a 1-second delay
  });
}


function fetchCombinedData() {
  return Promise.all([fetchProfile(), fetchUser()])
      .then(([profile, user]) => {
          return { profile, user }; // Resolving with an object containing both results
      });
}


fetchCombinedData()
  .then(data => {
      console.log(data);
  });

// Another example using Promise.all() with different types of promises
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo'); // setTimeout第三个参数就是给第一个函数传参数
});

Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values); // [3, 42, 'foo']
});