// console.log("TypeScript Tutorial");

// interface someValue {
//   name: string;
//   age: number;
//   isFemale: boolean;
// }

// let sampleObject: someValue = {
//   name: "Blaise",
//   age: 10 + 2,
//   isFemale: true,
// };

// let sampleObject: someValue = {
//   name: 6 + 7,
//   age: 'sam',
//   isFemale: null
// };

// console.log(sampleObject);

// // 1. String
// let greeting: string = "Hello everyone!";
// console.log(greeting.toUpperCase());

// // 2. Number
// let age: number = 12;
// console.log(age + 8);

// // 3. Boolean
// let isFemale: boolean = true;
// console.log(isFemale ? "Yay! she's female" : "She isn't female");

// ------------------------
// Union | any
// ------------------------

// let orderStatus: "processing" | "shipped" | "delivered" = "processing";
// orderStatus = "shipped";
// orderStatus = "delivered";

// console.log(orderStatus);

// let discount: number | string = 20;
// discount = "20%";

// console.log(discount);

// ------------------------
// Array | Object
// ------------------------
// let temperatures: number[] = [45, -90, "60"];
// console.log(temperatures);

// let colors: string[] = ["teal", "sage green"];
// colors.push(true);

// let mixedArray: (string | boolean)[] = [true, 23, "apple", false];

// let car: { brand: string; year: number } = { brand: "Zepher", year: 3045 };
// console.log(car);

// let bike: { brand: string; year: number } = {
//   brand: "Kawasaki Ninja H2r",
//   year: 2024,
// };
// bike.year = "1996";

// let laptop: { brand: string; year: number } = { brand: "Asus ROG", year: 2023 };
// let laptop2: { brand: string; year: number } = { brand: "Asus ROG" };

// console.log(laptop, laptop2);

// let candy = { title: "Lemon Plus", price: 10 };
// let protein = { title: "Chicken", price: 5500 };
// let utensil = { title: "Kinfe", price: "500" };
// // let bedding = { title: "Pillow" };

// let products: { title: string; price?: number }[] = [
//   candy,
//   protein,
//   utensil,
//   // bedding,
// ];

// console.log(products);

// ------------------------
// Function Params | Function Returns
// ------------------------

// let arrOfNames: string[] = ["Blaise", "Teddy", "JGrand", "Dubby", "Obaino"];

// function checkName(name: string): boolean {
//   return arrOfNames.includes(name) ? true : false;
// }

// console.log(checkName("Teddy"));
// console.log(checkName("Alice"));

// function checkName2(name: string): boolean {
//   return arrOfNames.includes(name);
// }

// let nameToCheck = "Alexandra";
// nameToCheck = "Blaise";

// if (checkName2(nameToCheck)) {
//   console.log(`${nameToCheck} is in the List`);
// } else {
//   console.log(`${nameToCheck} is not the List`);
// }

function processInput(someInput: string | number): void {
  if (typeof someInput === "number") {
    console.log(someInput * 2);
  } else if (typeof someInput === "string") {
    console.log(someInput.toUpperCase());
  }
}

processInput(7);
processInput("alili m");
