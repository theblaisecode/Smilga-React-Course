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

// interface Person {
//   name: string;
// }

// interface DogOwner extends Person {
//   dogName: string;
// }

// interface Manager extends Person {
//   managePeople(): void;
//   delegateTask(): void;
// }

// function getEmployee(): Person | DogOwner | Manager {
//   let randomNumber: number = Math.random();
//   console.log(randomNumber);

//   if (randomNumber <= 0.33) {
//     return {
//       name: "Blaise",
//     };
//   } else if (randomNumber <= 0.66) {
//     return {
//       name: "Blaise",
//       dogName: "Fey fey",
//     };
//   } else {
//     return {
//       name: "Blaise",
//       managePeople: () => console.log(`Manager is managing people...`),
//       delegateTask: () =>
//         console.log(`Manager is delegating a couple of tasks...`),
//     };
//   }
// }

// const employee: Person | DogOwner | Manager = getEmployee();
// console.log(employee);

// // function isManager(obj: Person | DogOwner | Manager): boolean {
// //   return "managePeople" in obj;
// // }

// // console.log(isManager(employee));

// function isManager(obj: Person | DogOwner | Manager): obj is Manager {
//   return "managePeople" in obj;
// }

// if (isManager(employee)) {
//   employee.delegateTask();
// }

// ------------------------
// Tuples and Eumns
// ------------------------
// enum UserRole {
//   Admin,
//   Manager,
//   Employee,
// }

// type User = {
//   id: number;
//   name: string;
//   role: UserRole;
//   contact: [string, string];
// };

// function createUser(userObj: User): User {
//   return userObj;
// }

// const newUser: User = createUser({
//   id: 123,
//   name: "Blaise",
//   role: UserRole.Manager,
//   contact: ["theblaisecode@gmail.com", "9348484893"],
// });

// console.log(newUser);

// ------------------------
// TYpe Assertion, Type Unknown and Type Never
// ------------------------

// let someValue: any = "this is a string";
// let strLenght: number = (someValue as string).length;

// type Bird = {
//   name: string;
// };

// let birdString = '{"name": "Eagle"}';
// let dogString = '{"breed": "Poodle"}';

// let birdObject = JSON.parse(birdString);
// let dogObject = JSON.parse(dogString);

// let bird = birdObject as Bird;
// let dog = dogObject as Bird;

// console.log(bird.name);
// console.log(dog.name);

// enum Status {
//   Pending = "pending",
//   Declined = "declined",
// }

// type User = {
//   name: string;
//   status: Status;
// };

// // save Status.Pending in the DB as a string
// // retrieve string from the DB

// const statusVaue = "pending";
// const user: User = { name: "Blaise", status: statusVaue as Status };

// Type Unknown
// let unknownValue: unknown;

// unknownValue = "Olla!";
// unknownValue = [3, 2, 1, "hello"];
// unknownValue = 47.0989765;

// if (typeof unknownValue === "number") {
//   unknownValue.toFixed(2);
// }

// function runSomeCode() {
//   const random = Math.random();

//   if (random < 0.5) {
//     throw new Error("there was an error...");
//   } else {
//     throw "some error";
//   }
// }

// try {
//   runSomeCode();
// } catch (error) {
//   if (error instanceof Error) {
//     console.log(error.message);
//   } else {
//     console.log(error);
//   }
// }

// Type Never
// let someValue: never = 0;

// type Theme = "light" | "dark";

// function checkTheme(theme: Theme): void {
//   if (theme === "light") {
//     console.log("light theme");
//     return;
//   }

//   if (theme === "dark") {
//     console.log("dark theme");
//     return;
//   }

//   // will have a type of never
//   theme;
// }

// enum Color {
//   Green,
//   Yellow,
//   Orange,
// }

// function getColorName(color: Color) {
//   switch (color) {
//     case Color.Green:
//       return "Green";
//     case Color.Yellow:
//       return "Yellow";
//     default:
//       // At build time
//       let unexpectedColor: never = color;

//       // At runtime
//       throw new Error(`Unexpected color value : ${color}`);
//   }
// }

// console.log(getColorName(Color.Green));
// console.log(getColorName(Color.Yellow));
// console.log(getColorName(Color.Orange));

// ------------------------
// ES6 Modules
// ------------------------
// import { job } from "./actions";

// const blaise = "Blaise";

// import newStudent, { sayHello, person, type Student } from "./actions";

// sayHello("Blaise");
// console.log(newStudent);
// console.log(person);

// const anodaStudent: Student = {
//   name: "Charles",
//   age: 28,
// };

// console.log(anodaStudent);

// ------------------------
// TYpe Guarding
// ------------------------
// //Type Guard 1 - typeof
// type ValueType = string | number | boolean;

// let value: ValueType;
// const random = Math.random();
// value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true;

// function checkValue(param: ValueType): void {
//   if (typeof param === "string") {
//     console.log(param.toLowerCase());
//     return;
//   }

//   if (typeof param === "number") {
//     console.log(param.toFixed(2));
//     return;
//   }

//   console.log(`Boolean: ${param} `);
// }

// checkValue(value);

// // Type Guard 2 - Equality Narrowing
// type Dog = { type: "dog"; name: string; bark: () => void };
// type Cat = { type: "cat"; name: string; meow: () => void };
// type Animal = Dog | Cat;

// function makeSound(animal: Animal) {
//   if (animal.type === "dog") {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

// const myCat: Cat = {
//   type: "cat",
//   name: "Whiskers",
//   meow: () => console.log("Meow!"),
// };

// const myDog: Dog = {
//   type: "dog",
//   name: "Whiskers",
//   bark: () => console.log("Woof Woof!"),
// };

// makeSound(myCat);
// makeSound(myDog);

// // Type Guard 3 - check for property
// function makeSound2(animal: Animal) {
//   if ("bark" in animal) {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

// // Type Guard 3 - Truthy / Falsy
// function printLength(str: string | null | undefined): void {
//   if (str) {
//     console.log(str.length);
//   } else {
//     console.log("No string provided");
//   }
// }

// printLength("Bie");
// printLength(null);
// printLength(undefined);

// // Type Guard 4 - instanceof
// try {
//   // Some code that may throw an error
//   throw new Error("This is an error");
// } catch (error) {
//   if (error instanceof Error) {
//     console.log("Caught an Error object: " + error.message);
//   } else {
//     console.log("Caught an unknown error");
//   }
// }

// function checkInput(input: Date | string) {
//   if (input instanceof Date) {
//     return input.getFullYear().toString();
//   } else {
//     return input;
//   }
// }

// const thisYear = checkInput(new Date());
// const someStr = checkInput("15-04-1452");

// console.log(thisYear);
// console.log(someStr);

// Type Predicate

// type Student = {
//   name: string;
//   study: () => void;
// };

// type User = {
//   name: string;
//   login: () => void;
// };

// type Person = Student | User;

// const randomPerson = (): Person => {
//   return Math.random() > 0.5
//     ? { name: "john", study: () => console.log("Studying") }
//     : { name: "mary", login: () => console.log("Logging in") };
// };

// const person = randomPerson();

// function isStudent(person: Person): person is Student {
//   // return 'study' in person;
//   return (person as Student).study !== undefined;
// }

// if (isStudent(person)) {
//   person.study(); // This is safe because TypeScript knows that 'person' is a Student.
// } else {
//   person.login();
// }

// Discriminated Unions and exhaustive check using the never type
// type IncrementAction = {
//   type: "increment";
//   amount: number;
//   timestamp: number;
//   user: string;
// };

// type DecrementAction = {
//   type: "decrement";
//   amount: number;
//   timestamp: number;
//   user: string;
// };

// type Action = IncrementAction | DecrementAction;

// function reducer(state: number, action: Action): number {
//   switch (action.type) {
//     case "increment":
//       return state + action.amount;
//     case "decrement":
//       return state - action.amount;

//     default:
//       const unexpectedAction: never = action;
//       throw new Error(`Unexpected action: ${unexpectedAction}`);
//   }
// }

// const newState = reducer(15, {
//   user: "john",
//   type: "increment",
//   amount: 5,
//   timestamp: 123456,
// });

// ------------------------
// Generics - Fundamentals
// ------------------------
// let array1: string[] = ["Apple", "Banana", "Mango"];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

// let array1: Array<string> = ["Apple", "Banana", "Mango"];
// let array2: Array<number> = [1, 2, 3];
// let array3: Array<boolean> = [true, false, true];

// console.log(array1, array2, array3);

// function genericFunction<T>(arg: T): T {
//   return arg;
// }

// const someStringValue = genericFunction<string>("Hello world");
// const someNumberValue = genericFunction<number>(123);
// const someBooleanValue = genericFunction<boolean>(false);

// console.log(someStringValue);
// console.log(someNumberValue);
// console.log(someBooleanValue);

// interface GenericInterface<T> {
//   value: T;
//   getValue: () => T;
// }

// const genericString: GenericInterface<string> = {
//   value: "Shinanigans",
//   getValue() {
//     return `${this.value}...`;
//   },
// };

// console.log(genericString.value);
// console.log(genericString.getValue());

// async function someFunction(): Promise<string> {
//   return "This is Blaise";
// }

// const result = someFunction();
// console.log(result);

// Challenge
// createArray<string>(3, "hello"); // ['hello', ['hello', ['hello']
// createArray<number>(4, 100); // [100, 100, 100, 100]

// function generateStringArr(length: number, value: string): string[] {
//   let res: string[] = [];
//   res = Array(length).fill(value);
//   return res;
// }

// console.log(generateStringArr(7, "Blaise"));

// function createArr<T>(length: number, value: T): Array<T> {
//   let res: T[] = [];
//   res = Array(length).fill(value);
//   return res;
// }

// const arrString = createArr<string>(4, "tired");
// const arrNumber = createArr<number>(4, 23);
// const arrBoolean = createArr<boolean>(4, false);

// console.log(arrString);
// console.log(arrNumber);
// console.log(arrBoolean);

// Multiple types/params
// function newPair<T, U, V>(param1: T, param2: U, param3: V): [T, U, V] {
//   return [param1, param2, param3];
// }

// let result = newPair<number, string, boolean>(7, "Blaise", false);
// console.log(result);

// function newFunc<T extends string | number | boolean>(value: T): T {
//   console.log(value);
//   return value;
// }

// newFunc("Olla, Blaise");
// newFunc(34);
// newFunc(false);

// type Car = {
//   brand: string;
//   model: string;
// };

// const car: Car = {
//   brand: "ford",
//   model: "mustang",
// };

// type Product = {
//   name: string;
//   price: number;
// };

// const product: Product = {
//   name: "shoes",
//   price: 1.99,
// };

// type Student = {
//   name: string;
//   age: number;
// };

// const student: Student = {
//   name: "peter",
//   age: 20,
// };

// function printName<T extends { name: string }>(input: T): void {
//   console.log(input.name);
// }

// printName(student);
// printName(product);
// printName(car);

// interface StoreData<T = any> {
//   data: T[];
// }

// const storeNumbers: StoreData<number> = {
//   data: [1, 2, 3, 4],
// };

// const randomStuff: StoreData = {
//   data: ["random", 1],
// };

// console.log(storeNumbers);
// console.log(randomStuff);

// const { data } = axios.get(someUrl);

// axios.get<{ name: string }[]>(someUrl);

// export class Axios {
//   get<T = any, R = AxiosResponse<T>, D = any>(
//     url: string,
//     config?: AxiosRequestConfig<D>
//   ): Promise<R>;
// }

// export interface AxiosResponse<T = any, D = any> {
//   data: T;
//   status: number;
//   statusText: string;
//   headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
//   config: InternalAxiosRequestConfig<D>;
//   request?: any;

// ------------------------
// Fetch Data and Declaration Files
// ------------------------

// const url = "https://www.course-api.com/react-tours-project";

// async function fetchData(url: string) {
//   try {
//     const res = await fetch(url);

//     if (!res.ok) {
//       throw new Error(`HTTP error status: ${res.status}`);
//     }

//     const data = res.json();
//     return data;
//   } catch (error) {
//     const errorMessage =
//       error instanceof Error ? error.message : "there was an error...";

//     console.log(errorMessage);
//     return [];
//   }
// }

// const tours = await fetchData(url);
// tours.map((tour: any) => {
//   console.log(tour.name);
// });

// Challenge
// const url = "https://www.course-api.com/react-tours-project";

// type Tour = {
//   id: string;
//   name: string;
//   info: string;
//   image: string;
//   price: string;
// };

// async function fetchData(url: string): Promise<Tour[]> {
//   try {
//     const res = await fetch(url);

//     if (!res.ok) {
//       throw new Error(`HTTP error status: ${res.status}`);
//     }

//     const data: Tour[] = await res.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     const errorMessage =
//       error instanceof Error ? error.message : "ther was an error...";
//     console.log(errorMessage);
//   }
// }

// const tours = await fetchData(url);
// tours.map((tour: any) => {
//   console.log(tour);
// });

// ZOD Library
// import { z } from "zod";

// const url = "https://www.course-api.com/react-tours-project";

// const tourSchema = z.object({
//   id: z.string(),
//   name: z.string(),
//   info: z.string(),
//   image: z.string(),
//   price: z.string(),
//   // something: z.number(),
// });

// type Tour = z.infer<typeof tourSchema>;

// async function fetchData(url: string): Promise<Tour[]> {
//   try {
//     const res = await fetch(url);

//     if (!res.ok) {
//       throw new Error(`HTTP error status: ${res.status}`);
//     }

//     const rawData: Tour[] = await res.json();
//     console.log(rawData);

//     const result = tourSchema.array().safeParse(rawData);
//     console.log(result);

//     if (!result.success) {
//       throw new Error(`Invalid data: ${result.error}`);
//     }

//     return result.data;
//   } catch (error) {
//     const errorMessage =
//       error instanceof Error ? error.message : "ther was an error...";
//     console.log(errorMessage);
//   }
// }

// const tours = await fetchData(url);
// tours.map((tour: any) => {
//   console.log(tour.name);
// });

// Typescript Declaration File
// import { Random } from "./types";
// import bcryptjs from "bcryptjs";

let something = "something";
