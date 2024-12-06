// const blaise = "Blaise";

// export const job = "Front-End dev";

export function sayHello(name: string): void {
  console.log(`Hello ${name}`);
}

export let person = "Blaise";

export type Student = {
  name: string;
  age: number;
};

const newStudent: Student = {
  name: "Teddy",
  age: 18,
};

export default newStudent;
