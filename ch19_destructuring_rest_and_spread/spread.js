// let boys = ["Abdi", "Ali", "Adam", "Najiib"];
// let girls = ["Najma", "Fatima", "Nimca", "Halima"];
// let allBoysGirls = [...boys, ...girls];
// console.log(allBoysGirls);

let boy = {
  name: "Abdi",
  age: 20,
};

let girl = {
  name: "Najma",
  age: 19,
};

let allPeople = {
  boy: { ...boy },
  girl: { ...girl },
};

console.log(allPeople);