let getUser = new Promise((resolve, reject) => {
  // Simulate a task that takes 2 seconds
  setTimeout(() => {
    let success = true;

    if (success) {
      resolve("User data received successfully!");
    } else {
      reject("Failed to get user data.");
    }
  }, 2000);
});

getUser
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// What is happening? A Promise has three possible status:
// Pending    → still working ⏳
// Fulfilled  → successful ✅
// Rejected   → failed ❌

// When we Write:
// resolve("User data received successfully!");

// the Promise becomes fulfilled.
// Then .then() receives the result:

// getUser.then((message) => {
//     console.log(message);
// });

// If something goes wrong:

// reject("Failed to get user data.");

// .catch() handles the error:

// getUser.catch((error) => {
//     console.log(error);
// });
// A real-world example

// Think of ordering food 🍕:

// You order food
//       ↓
//    Promise
//       ↓
//   ┌───┴────┐
//   ↓        ↓
// Success   Failure
//   ↓        ↓
// resolve   reject
//   ↓        ↓
// .then()   .catch()

// So you can think of a Promise as:

// "I promise I'll give you the result later."