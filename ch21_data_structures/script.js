// let friends  = ["Ali", "Samia", "Fatima", "Hussein", "Shukri", "Ali"]
// console.log(friends[0])


// let myFriends = new Set()

// myFriends.add("Ali")
// myFriends.add("Samia")
// myFriends.add("Ali")
// console.log(myFriends)

// Create an empty Map
let monthlySales = new Map();

// Add monthly sales using .set()
monthlySales.set("January", 5000);
monthlySales.set("February", 6500);
monthlySales.set("March", 7200);
monthlySales.set("April", 6000);
monthlySales.set("May", 8500);
monthlySales.set("June", 9000);
monthlySales.set("July", 7800);
monthlySales.set("August", 9500);
monthlySales.set("September", 8200);
monthlySales.set("October", 10000);
monthlySales.set("November", 11000);
monthlySales.set("December", 15000);


// Display the entire Map
// console.log(monthlySales);


// Get the sales for a specific month
console.log(monthlySales.get("January"));


// // Update January sales
// monthlySales.set("January", 5500);


// // Loop through the Map
// monthlySales.forEach((sales, month) => {
//   console.log(`${month}: $${sales}`);
// });