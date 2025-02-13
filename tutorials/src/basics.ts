let username: string = "Jack"; // Declare a string variable 'username' and initialize it with "Jack"
let hasLoggedIn: boolean = true; // Declare a boolean variable 'hasLoggedIn' and initialize it with true

username += "Harrington"; // Append "Harrington" to 'username'

console.log(username); // Log the value of 'username' to the console

let myNumber: number = 10; // Declare a number variable 'myNumber' and initialize it with 10

let myRegex: RegExp = /foo/; // Declare a RegExp variable 'myRegex' and initialize it with a regular expression

const names: string[] = username.split(" "); // Split 'username' by spaces and store the result in a string array 'names'

// array in generic type
const myValues: Array<number> = [1, 2, 3]; // Declare a number array 'myValues' using generic type syntax and initialize it with [1, 2, 3]

// as objects
const myPerson: {
  first: string;
  last: string;
} = {
  first: "Jack", // Initialize 'first' property with "Jack"
  last: "Herrington", // Initialize 'last' property with "Herrington"
};

// using interface
interface Person {
  first: string; // 'first' property of type string
  last: string; // 'last' property of type string
}

const myPerson2: Person = {
  first: "Jack", // Initialize 'first' property with "Jack"
  last: "Herrington", // Initialize 'last' property with "Herrington"
};

// objects as maps, like a dictionary
const ids: Record<number, string> = {
  10: "a", // Key 10 maps to value "a"
  20: "b", // Key 20 maps to value "b"
};

ids[30] = "c"; // Add a new key-value pair to 'ids', key 30 maps to value "c"

// looping
for (let i: number = 0; i < 10; i++) {
  console.log(i); // Log the value of 'i' to the console for each iteration
}

[1, 2, 3].forEach((v) => console.log(v)); // Log each value in the array [1, 2, 3] to the console
const out: number[] = [4, 5, 6].map((i) => i * 10); // Create a new array by multiplying each value in [4, 5, 6] by 10
