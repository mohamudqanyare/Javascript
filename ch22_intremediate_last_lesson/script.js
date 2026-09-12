// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });


  fetch("https://jsonplaceholder.typicode.com/users/2")
    .then((response) => response.json())
    .then((user) => {
      console.log(user.name);
      console.log(user.email);
      console.log(user.phone);
    })
    .catch((error) => {
      console.error("Something went wrong:", error);
    });


  // let city = " London "
  // console.log(city.trim().toUpperCase().concat(" Is my home "))