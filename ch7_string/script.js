let fullName = "John Doe" // index = position Number
console.log(fullName)

// ====================================================
// JavaScript String Methods
// Example String
// ====================================================

// Character Positions (Index)
// J=0 o=1 h=2 n=3 " "=4 D=5 o=6 e=7

// ====================================================
// 1. length
// Returns the total number of characters.
// ====================================================

console.log(fullName.length);          // 8

// ====================================================
// 2. charAt(index)
// Returns the character at the specified index.
// ====================================================

console.log(fullName.charAt(0));       // "J"
console.log(fullName.charAt(5));       // "D"

// ====================================================
// 3. at(index)
// Returns character at index.
// Supports negative indexes.
// ====================================================

console.log(fullName.at(0));           // "J"
console.log(fullName.at(-1));          // "e"
console.log(fullName.at(-2));          // "o"

// ====================================================
// 4. indexOf()
// Returns the first occurrence of text.
// Returns -1 if not found.
// ====================================================

console.log(fullName.indexOf("o"));    // 1
console.log(fullName.indexOf("Doe"));  // 5
console.log(fullName.indexOf("x"));    // -1

// ====================================================
// 5. lastIndexOf()
// Returns the last occurrence.
// ====================================================

let text = "John Doe John";

console.log(text.lastIndexOf("John")); // 9

// ====================================================
// 6. includes()
// Checks whether text exists.
// Returns true or false.
// ====================================================

console.log(fullName.includes("John"));  // true
console.log(fullName.includes("Smith")); // false

// ====================================================
// 7. startsWith()
// Checks whether string starts with text.
// ====================================================

console.log(fullName.startsWith("John")); // true
console.log(fullName.startsWith("Doe"));  // false

// ====================================================
// 8. endsWith()
// Checks whether string ends with text.
// ====================================================

console.log(fullName.endsWith("Doe"));  // true
console.log(fullName.endsWith("John")); // false

// ====================================================
// 9. slice(start, end)
// Extracts part of a string.
// End index is NOT included.
// Supports negative indexes.
// ====================================================

console.log(fullName.slice(0,4));   // "John"
console.log(fullName.slice(5));     // "Doe"
console.log(fullName.slice(-3));    // "Doe"

// ====================================================
// 10. substring(start, end)
// Similar to slice().
// Does NOT support negative indexes.
// ====================================================

console.log(fullName.substring(0,4)); // "John"
console.log(fullName.substring(5));   // "Doe"

// ====================================================
// 11. substr(start, length)
// Deprecated.
// Uses starting index and length.
// ====================================================

console.log(fullName.substr(5,3)); // "Doe"

// ====================================================
// 12. replace()
// Replaces only the first match.
// ====================================================

console.log(fullName.replace("John","Jane"));
// "Jane Doe"

// ====================================================
// 13. replaceAll()
// Replaces every occurrence.
// ====================================================

let animals = "cat cat cat";

console.log(animals.replaceAll("cat","dog"));
// "dog dog dog"

// ====================================================
// 14. toUpperCase()
// Converts all letters to uppercase.
// ====================================================

console.log(fullName.toUpperCase());
// "JOHN DOE"

// ====================================================
// 15. toLowerCase()
// Converts all letters to lowercase.
// ====================================================

console.log(fullName.toLowerCase());
// "john doe"

// ====================================================
// 16. trim()
// Removes spaces from both ends.
// ====================================================

let name = "   John Doe   ";

console.log(name.trim());
// "John Doe"

// ====================================================
// 17. trimStart()
// Removes spaces from beginning.
// ====================================================

console.log("   John".trimStart());
// "John"

// ====================================================
// 18. trimEnd()
// Removes spaces from end.
// ====================================================

console.log("John   ".trimEnd());
// "John"

// ====================================================
// 19. split(separator)
// Converts string into an array.
// ====================================================

console.log(fullName.split(" "));
// ["John", "Doe"]

console.log(fullName.split(""));
// ["J","o","h","n"," ","D","o","e"]

// ====================================================
// 20. concat()
// Joins strings.
// ====================================================

let first = "John";
let last = "Doe";

console.log(first.concat(" ",last));
// "John Doe"

// ====================================================
// 21. repeat()
// Repeats a string.
// ====================================================

console.log("Hi ".repeat(3));
// "Hi Hi Hi "

// ====================================================
// 22. padStart(length, value)
// Pads beginning until desired length.
// ====================================================

console.log("5".padStart(3,"0"));
// "005"

// ====================================================
// 23. padEnd(length, value)
// Pads end until desired length.
// ====================================================

console.log("5".padEnd(3,"0"));
// "500"

// ====================================================
// 24. match()
// Finds regex matches.
// ====================================================

console.log(fullName.match(/o/g));
// ["o","o"]

// ====================================================
// 25. matchAll()
// Finds all matches with extra details.
// ====================================================

console.log([... "John John".matchAll(/John/g)]);

// Output:
// [
//   ["John", index:0, input:"John John"],
//   ["John", index:5, input:"John John"]
// ]

// ====================================================
// 26. search()
// Returns first matching index.
// ====================================================

console.log(fullName.search("Doe"));
// 5

// ====================================================
// 27. localeCompare()
// Compares alphabetically.
// -1 = before
// 0 = equal
// 1 = after
// ====================================================

console.log("apple".localeCompare("banana"));
// -1

console.log("banana".localeCompare("apple"));
// 1

console.log("apple".localeCompare("apple"));
// 0

// ====================================================
// 28. valueOf()
// Returns primitive string value.
// ====================================================

console.log(fullName.valueOf());
// "John Doe"

// ====================================================
// 29. toString()
// Converts to string.
// ====================================================

console.log(fullName.toString());
// "John Doe"

// ====================================================
// 30. normalize()
// Normalizes Unicode strings.
// Useful when comparing accented characters.
// ====================================================

console.log("é".normalize());
// "é"

// ====================================================
// 31. charCodeAt(index)
// Returns UTF-16 code.
// ====================================================

console.log(fullName.charCodeAt(0));
// 74

// ====================================================
// 32. codePointAt(index)
// Returns Unicode code point.
// ====================================================

console.log(fullName.codePointAt(0));
// 74

// ====================================================
// 33. String.fromCharCode()
// Converts UTF-16 code into character.
// ====================================================

console.log(String.fromCharCode(74));
// "J"

// ====================================================
// 34. String.fromCodePoint()
// Converts Unicode code point into character.
// ====================================================

console.log(String.fromCodePoint(74));
// "J"

// ====================================================
// BONUS: Template Literals (Very Common)
// ====================================================

let age = 25;

console.log(`My name is ${fullName} and I am ${age} years old.`);
// "My name is John Doe and I am 25 years old."