console.log("TypeScript Tutorial");

interface someValue {
  name: string;
  age: number;
  isFemale: boolean;
}

let sampleObject: someValue = {
  name: "Blaise",
  age: 10 + 2,
  isFemale: true,
};

// let sampleObject: someValue = {
//   name: 6 + 7,
//   age: 'sam',
//   isFemale: null
// };

console.log(sampleObject);

// 1. String
let greeting: string = "Hello everyone!";
console.log(greeting.toUpperCase());

// 2. Number
let age: number = 12;
console.log(age + 8);

// 3. Boolean
let isFemale: boolean = true;
console.log(isFemale ? "Yay! she's female" : "She isn't female");
