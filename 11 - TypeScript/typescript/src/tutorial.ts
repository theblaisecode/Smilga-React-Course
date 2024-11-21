console.log("TypeScript Tutorial");

interface someValue {
  name: string;
  age: number;
  isFemale: boolean;
}

let sampleObject: someValue = {
  name: "Blaise",
  age: 10 + 2,
  isFemale: true
};

// let sampleObject: someValue = {
//   name: 6 + 7,
//   age: 'sam',
//   isFemale: null
// };

console.log(sampleObject)
