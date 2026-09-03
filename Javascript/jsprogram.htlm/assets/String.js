

// let Name='aman, vishal ,atul ,golu ,and ,suman ,siristi';


// Name.split('')
// let text=Name.split(",")
// let upercase=text.map((uper)=>uper.toUpperCase())


// let number =[1,2,3,4,5,6,7,7,8]
// let update=number.keys((Element)=> Element > 5)
// let updare=number.map((squar)=> squar ** 2)
// console.log(update)


// Math.sin(1.56);




let marks = [85, 72, 90, 60, 95, 78];

let total = 0;

for(const mark of marks){
    total+=mark
}

let average = total / marks.length;

let highest = Math.max(...marks);
let lowest = Math.min(...marks);

console.log("Marks:", marks);
console.log("Total Marks:", total);
console.log("Average Marks:", average);
console.log("Highest Marks:", highest);
console.log("Lowest Marks:", lowest);



// Shopping Cart System with Array

let cart = [];

// Product list
let products = [
    { id: 1, name: "Apple", price: 50 },
    { id: 2, name: "Banana", price: 20 },
    { id: 3, name: "Mango", price: 80 },
    { id: 4, name: "Kiwi", price: 100 }
];

// Function to add product
function addToCart(productId) {
    let product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        console.log(product.name + " added to cart.");
    } else {
        console.log("Product not found!");
    }
}

// Function to remove product
function removeFromCart(productId) {
    let index = cart.findIndex(p => p.id === productId);
    if (index !== -1) {
        console.log(cart[index].name + " removed from cart.");
        cart.splice(index, 1);
    } else {
        console.log("Product not in cart!");
    }
}

// Function to search product in cart
function searchInCart(productName) {
    let result = cart.filter(p => p.name.toLowerCase() === productName.toLowerCase());
    if (result.length > 0) {
        console.log(productName + " is in the cart.");
    } else {
        console.log(productName + " not found in cart.");
    }
}

// Function to calculate total bill
function calculateTotal() {
    let total = cart.reduce((sum, p) => sum + p.price, 0);
    console.log("Total Bill = ₹" + total);
}

// ---------- Testing ---------- //
addToCart(1);  
addToCart(3);  
addToCart(2);  

console.log("Cart:", cart);

removeFromCart(2); 
console.log("Cart after remove:", cart);

searchInCart("Mango");  
searchInCart("Kiwi");  

calculateTotal();




// Todo List with Array

let tasks = [];

function addTask(task) {
    tasks.push(task);
    console.log(" Task added:", task);
}


function deleteTask(task) {
    let index = tasks.indexOf(task);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log("Task deleted:", task);
    } else {
        console.log("Task not found!");
    }
}


function showTasks() {
    console.log(" Your Tasks:");
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        tasks.forEach((t, i) => {
            console.log((i + 1) + ". " + t);
        });
    }
}

// ---------- Testing ---------- //
addTask("Complete homework");
addTask("Go for walk");
addTask("Buy groceries");

showTasks();

deleteTask("Go for walk");

showTasks();





// Unique Values Finder with prompt()

let input = prompt("Enter numbers separated by space:");
// Example: 10 20 20 30 40 10 50

let numbers = input.split(" ").map(Number);
let uniqueNumbers = [...new Set(numbers)];

alert("Unique Numbers: " + uniqueNumbers.join(", "));




 for(let a=0;a <=100;a++){
    console.log(a)
}
