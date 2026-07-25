// let firstName = "Mohamud";
// let friendNames = ["Alice", "Bob", "Charlie", "David"];
// let friendAges = [25, 30, 22, 28];
// console.log("First Name:", firstName);
// console.log("Friend Names:", friendNames);
// console.log("Friend Ages:", friendAges);
// console.log(friendNames [0] + "is" + friendAges [0] + "year old.");
// console.log(friendNames[1] + "is" + friendAges[1] + "year old.");

// let students = new Array();
// students.push("Libaan")
// students.push("Abdi")
// students.push("Ahmed")
// students.push("Ali")
// students[1] = "Nuura"

// console.log(students[2])

// console.log(students)

// console.log(students.length)

// ========================================
// JavaScript Array Methods Using One Array
// ========================================

let students = new Array();

students.push("Libaan");
students.push("Abdi");
students.push("Ahmed");
students.push("Ali");

console.log("Original Array:", students);

// // ========================================
// // length
// // ========================================

// console.log("Length:", students.length);

// // ========================================
// // push()
// // ========================================

// students.push("Nuura");
// console.log("push():", students);

// // ========================================
// pop()
// // ========================================

// students.pop();
// console.log("pop():", students);

// // ========================================
// // unshift()
// // ========================================

// students.unshift("Hassan");
// console.log("unshift():", students);

// // ========================================
// // shift()
// // ========================================

// students.shift();
// console.log("shift():", students);

// // ========================================
// // indexOf()
// // ========================================

// console.log("indexOf('Ahmed'):", students.indexOf("Ahmed"));

// // ========================================
// // lastIndexOf()
// // ========================================

// students.push("Ahmed");
// console.log("lastIndexOf('Ahmed'):", students.lastIndexOf("Ahmed"));

// // ========================================
// // includes()
// // ========================================

// console.log("includes('Ali'):", students.includes("Ali"));

// // ========================================
// // slice()
// // ========================================

// console.log("slice(1,3):", students.slice(1,3));

// // ========================================
// // splice()
// // ========================================

// students.splice(1,1,"Nuura");
// console.log("splice():", students);

// // ========================================
// // concat()
// // ========================================

// console.log("concat():", students.concat(["Ayan"]));

// // ========================================
// // join()
// // ========================================

// console.log("join():", students.join(" - "));

// // ========================================
// // reverse()
// // ========================================

// students.reverse();
// console.log("reverse():", students);

// // ========================================
// // sort()
// // ========================================

// students.sort();
// console.log("sort():", students);

// // ========================================
// // find()
// // ========================================

// console.log(
    // "find():",
    // students.find(student => student.startsWith("A"))
// );

// // ========================================
// // findIndex()
// // ========================================

// console.log(
    // "findIndex():",
    // students.findIndex(student => student === "Ali")
// );

// // ========================================
// // filter()
// // ========================================

// console.log(
    // "filter():",
    // students.filter(student => student.includes("a"))
// );

// // ========================================
// // map()
// // ========================================

// console.log(
    // "map():",
    // students.map(student => student.toUpperCase())
// );

// // ========================================
// // forEach()
// // ========================================

// students.forEach(student => console.log("forEach():", student));

// // ========================================
// // every()
// // ========================================

// console.log(
//     "every():",
//     students.every(student => student.length > 2)
// );

// // ========================================
// // some()
// // ========================================

// console.log(
//     "some():",
//     students.some(student => student === "Ali")
// );

// // ========================================
// // fill()
// // ========================================

// students.fill("Student",0,2);
// console.log("fill():", students);

// // ========================================
// // copyWithin()
// // ========================================

// students.copyWithin(1,2);
// console.log("copyWithin():", students);

// // ========================================
// // flat()
// // ========================================
// // (Cannot demonstrate because students
// // is not a nested array.)

// console.log("flat():", students.flat());

// // ========================================
// // flatMap()
// // ========================================

// console.log(
//     "flatMap():",
//     students.flatMap(student => [student, student.length])
// );

// // ========================================
// // at()
// // ========================================

// console.log("at(0):", students.at(0));
// console.log("at(-1):", students.at(-1));

// // ========================================
// // entries()
// // ========================================

// for (let entry of students.entries()) {
//     console.log("entries():", entry);
// }

// // ========================================
// // keys()
// // ========================================

// for (let key of students.keys()) {
    // console.log("keys():", key);
// }

// // ========================================
// // values()
// // ========================================

// for (let value of students.values()) {
//     console.log("values():", value);
// }

// // ========================================
// // toString()
// // ========================================

// console.log("toString():", students.toString());

// // ========================================
// // toReversed()
// // ========================================

// console.log("toReversed():", students.toReversed());

// // ========================================
// // toSorted()
// // ========================================

// console.log("toSorted():", students.toSorted());

// // ========================================
// // toSpliced()
// // ========================================

// console.log(
//     "toSpliced():",
//     students.toSpliced(1,1,"Mohamed")
// );

// // ========================================
// // with()
// // ========================================

// console.log(
//     "with():",
//     students.with(0,"Farah")
// );

// // ========================================
// // findLast()
// // ========================================

// console.log(
//     "findLast():",
//     students.findLast(student => student.includes("a"))
// );

// // ========================================
// // findLastIndex()
// // ========================================

// console.log(
//     "findLastIndex():",
//     students.findLastIndex(student => student.includes("a"))
// );

// // ========================================
// // Static Array Methods
// // ========================================

// console.log(Array.isArray(students));

// console.log(Array.from("JavaScript"));

// console.log(Array.of("Ali","Ahmed","Libaan"));