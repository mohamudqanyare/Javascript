/*
=========================================================
            ECMAScript 6 (ES6) Complete Example
=========================================================
This file demonstrates the major ES6 features with comments.
Run it in a modern browser or Node.js.
=========================================================
*/

// ======================================================
// 1. let (Block Scoped Variable)
// ======================================================

let age = 20;

if (true) {
  let age = 30; // Different variable
  console.log("Inside block:", age);
}

console.log("Outside block:", age);

// ======================================================
// 2. const (Constant Variable)
// ======================================================

const PI = 3.14159;

const person = {
  name: "John",
};

// Object properties can still change
person.name = "Jane";

console.log(person);

// ======================================================
// 3. Arrow Functions
// ======================================================

const add = (a, b) => a + b;

const square = (number) => number * number;

const greet = () => "Hello World";

console.log(add(5, 7));
console.log(square(4));
console.log(greet());

// ======================================================
// 4. Template Literals
// ======================================================

const username = "Alice";

console.log(`Welcome ${username}!`);
console.log(`Hello ${username}!`);
const message = `
This is
a multiline
string.
`;

console.log(message);

// ======================================================
// 5. Default Parameters
// ======================================================

function sayHello(name = "Guest") {
  console.log(`Hello ${name}`);
}

sayHello();
sayHello("David");

// ======================================================
// 6. Rest Parameters (...)
// ======================================================

function total(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(total(10, 20, 30));

// ======================================================
// 7. Spread Operator (...)
// ======================================================

const numbers1 = [1, 2, 3];

const numbers2 = [...numbers1, 4, 5];

console.log(numbers2);

const student = {
  name: "Ali",
  age: 20,
};

const studentCopy = {
  ...student,
  country: "UK",
};

console.log(studentCopy);

// ======================================================
// 8. Array Destructuring
// ======================================================

const colors = ["Red", "Green", "Blue"];

const [firstColor, secondColor] = colors;

console.log(firstColor);
console.log(secondColor);

// ======================================================
// 9. Object Destructuring
// ======================================================

const employee = {
  id: 1,
  fullName: "Sarah",
  department: "IT",
};

const { fullName, department } = employee;

console.log(fullName);
console.log(department);

// ======================================================
// 10. Enhanced Object Literals
// ======================================================

const city = "London";

const country = "UK";

const address = {
  city,
  country,

  display() {
    console.log(`${this.city}, ${this.country}`);
  },
};

address.display();

// ======================================================
// 11. Computed Property Names
// ======================================================

const property = "email";

const account = {
  [property]: "user@example.com",
};

console.log(account.email);

// ======================================================
// 12. Classes
// ======================================================

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`My name is ${this.name}`);
  }
}

const p1 = new Person("Ahmed", 25);

p1.introduce();

// ======================================================
// 13. Inheritance
// ======================================================

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Max", "Labrador");

dog.speak();

// ======================================================
// 14. Promises
// ======================================================

const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// ======================================================
// 15. Symbols
// ======================================================

const id = Symbol("id");

const user = {
  [id]: 101,
  name: "Mike",
};

console.log(user[id]);

// ======================================================
// 16. for...of Loop
// ======================================================

const fruits = ["Apple", "Orange", "Banana"];

for (const fruit of fruits) {
  console.log(fruit);
}

// ======================================================
// 17. Generators
// ======================================================

function* numbersGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = numbersGenerator();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// ======================================================
// 18. Map
// ======================================================

const map = new Map();

map.set("name", "James");
map.set("age", 35);

console.log(map.get("name"));

// ======================================================
// 19. Set
// ======================================================

const set = new Set();

set.add(10);
set.add(20);
set.add(20); // Duplicate ignored

console.log(set);

// ======================================================
// 20. WeakMap
// ======================================================

const weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "Private Data");

console.log(weakMap.get(obj));

// ======================================================
// 21. WeakSet
// ======================================================

const weakSet = new WeakSet();

let anotherObj = {};

weakSet.add(anotherObj);

// ======================================================
// 22. Number Methods
// ======================================================

console.log(Number.isInteger(10));
console.log(Number.isNaN(NaN));
console.log(Number.parseInt("50"));
console.log(Number.parseFloat("12.5"));

// ======================================================
// 23. Math Methods
// ======================================================

console.log(Math.trunc(5.89));
console.log(Math.sign(-15));
console.log(Math.cbrt(27));
console.log(Math.hypot(3, 4));
console.log(Math.log10(1000));

// ======================================================
// 24. String Methods
// ======================================================

const text = "JavaScript ES6";

console.log(text.startsWith("Java"));
console.log(text.endsWith("ES6"));
console.log(text.includes("Script"));
console.log("Hi ".repeat(3));

// ======================================================
// 25. Array Methods
// ======================================================

console.log(Array.from("HELLO"));

console.log(Array.of(5, 10, 15));

console.log([1, 2, 3, 4].find((n) => n > 2));

console.log([1, 2, 3, 4].findIndex((n) => n === 3));

console.log([1, 2, 3].fill(0));

console.log([1, 2, 3, 4].copyWithin(1, 2));

// ======================================================
// 26. Object Methods
// ======================================================

const object1 = {
  name: "Ali",
};

const object2 = {
  age: 22,
};

const merged = Object.assign({}, object1, object2);

console.log(merged);

console.log(Object.is(NaN, NaN));

console.log(Object.keys(merged));

// ======================================================
// 27. Binary and Octal Literals
// ======================================================

const binary = 0b1010;

const octal = 0o17;

console.log(binary);

console.log(octal);

// ======================================================
// 28. Unicode
// ======================================================

console.log("\u{1F600}");

// ======================================================
// 29. Regular Expression Flags
// ======================================================

const regex = /hello/gi;

console.log(regex.flags);

// ======================================================
// 30. Proxy
// ======================================================

const target = {
  message: "Hello",
};

const proxy = new Proxy(target, {
  get(object, property) {
    console.log(`Reading ${property}`);
    return object[property];
  },
});

console.log(proxy.message);

// ======================================================
// 31. Reflect API
// ======================================================

console.log(Reflect.get(target, "message"));

// ======================================================
// 32. Arrow Function "this"
// ======================================================

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    setTimeout(() => {
      this.count++;

      console.log("Counter:", this.count);
    }, 1000);
  }
}

const counter = new Counter();

counter.increment();

// ======================================================
// 33. Modules (Example Only)
// ======================================================

// ----- math.js -----
//
// export const PI = 3.14;
//
// export function add(a, b) {
//     return a + b;
// }
//
//
// ----- app.js -----
//
// import { PI, add } from "./math.js";
//
// console.log(PI);
// console.log(add(5, 10));

// ======================================================
//                  END OF ES6 EXAMPLES
// ======================================================
