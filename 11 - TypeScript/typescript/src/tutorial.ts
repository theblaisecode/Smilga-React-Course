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

// ------------------------
// Optional default | Rest Parameters
// ------------------------
// function processInput(someInput: string | number): void {
//   if (typeof someInput === "number") {
//     console.log(someInput * 2);
//   } else if (typeof someInput === "string") {
//     console.log(someInput.toUpperCase());
//   }
// }

// processInput(7);

// processInput("alili m");

// ------------------------
// Objects as parameters | Excess property checks
// ------------------------
// function processData(
//   input: string | number,
//   config: { reverse: boolean } = { reverse: false }
// ): string | number {
//   if (typeof input === "number") {
//     console.log(Math.sqrt(input));
//     return Math.sqrt(input);
//   } else {
//     console.log(
//       config.reverse
//         ? input.toUpperCase().split("").reverse().join("")
//         : input.toUpperCase()
//     );
//     return config.reverse
//       ? input.toUpperCase().split("").reverse().join("")
//       : input.toUpperCase();
//   }
// }

// console.log(processData(10));
// console.log(processData("Yadayar"));
// console.log(processData("Blaise", { reverse: true }));

// ------------------------
// Type Alias | Intersection Type
// ------------------------
// type User = { id: number; name: string; isActive: boolean };

// const john: User = {
//   id: 1,
//   name: "john",
//   isActive: true,
// };

// const susan: User = {
//   id: 1,
//   name: "susan",
//   isActive: false,
// };

// function createUser(user: User): User {
//   console.log(`Hello there ${user.name.toUpperCase()} !!!`);
//   return user;
// }

// type Employee = { id: number; name: string; department: string };
// type Manager = { id: number; name: string; employees: Employee[] };
// type Staff = Employee | Manager;

// function printStaffDetails(staff: Staff): void {
//   "employees" in staff
//     ? console.log(
//         `${staff.name} is a manager and has ${staff.employees.length} employees`
//       )
//     : console.log(
//         `${staff.name} is an employee in ${staff.department} department`
//       );
// }

// const tobe: Employee = { id: 10, name: "Tobechukwu", department: "Design" };
// const dubem: Employee = { id: 10, name: "Chidubem", department: "Artiste" };
// const amaka: Manager = { id: 20, name: "Chiamaka", employees: [tobe, dubem] };

// printStaffDetails(tobe);
// printStaffDetails(amaka);

// ------------------------
// Interface Fundamentals
// ------------------------

// interface Book {
//   isbn: number;
//   title: string;
//   author: string;
//   genre?: string;
//   printBook(): void;
//   printNote(message1: string, message2: string): string;
//   printSomething: (someValue: number) => number;
// }

// const novel: Book = {
//   readonly isbn: 123,
//   title: "Throne of Glass",
//   author: "Sarah J. Maas",
//   genre: "Fanasy-fiction",
//   printBook() {
//     console.log(this.author);
//   },
//   printNote(message1, message2) {
//     return `${message1} ${this.title} ${message2}`;
//   },
//   // first option
//   // printSomething: function (someValue) {
//   //   return someValue;
//   // },
//   // second option
//   printSomething: (someValue) => {
//     // "this" gotcha
//     console.log(novel.author);
//     return someValue;
//   },
//   // third option
//   // printSomething(someValue) {
//   //   return someValue;
//   // },
//   // alternative
//   // printAuthor: () => {
//   //   console.log(deepWork.author);
//   // },
// };

// novel.printBook();
// const result = novel.printNote("This is Book 1 in the", "series");
// console.log(result);

// interface Computer {
//   readonly id: number;
//   brand: string;
//   ram: number;
//   storage?: number;
//   upgradeRam(increaseRam: number): number;
// }

// const device: Computer = {
//   id: 853379,
//   brand: "Asus",
//   ram: 16,
//   upgradeRam(increaseRam: number) {
//     return this.ram + increaseRam;
//   },
// };

// console.log(device.upgradeRam(8));
// console.log(device);

// ------------------------
// Interface Advanced
// ------------------------

interface Person {
  name: string;
}

interface DogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delegateTask(): void;
}

function getEmployee(): Person | DogOwner | Manager {
  let randomNumber: number = Math.random();
  console.log(randomNumber);

  if (randomNumber <= 0.33) {
    return {
      name: "Blaise",
    };
  } else if (randomNumber <= 0.66) {
    return {
      name: "Blaise",
      dogName: "Fey fey",
    };
  } else {
    return {
      name: "Blaise",
      managePeople() {
        console.log(`Manager ${this.name} is managing people...`);
      },
      delegateTask() {
        console.log(`Manager ${this.name} is delegating a couple of tasks...`);
      },
    };
  }
}

const employee: Person | DogOwner | Manager = getEmployee();
console.log(employee)
