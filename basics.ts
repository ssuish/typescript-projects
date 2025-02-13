let username: string = "Jack";
let hasLoggedIn: boolean = true;

username += "Harrington";

console.log(username);

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

const names: string[] = username .split(" ");

// array in generic type
const myValues: Array<number> = [1, 2, 3];

// as objects
const myPerson: {
    first: string;
    last: string;
} = {
    first: "Jack",
    last: "Herrington"
}

// using interface
interface Person {
    first: string,
    last: string
}

const myPerson2: Person = {
    first: "Jack",
    last: "Herrington"
}

// objects as maps, like a dictionary
const ids: Record<number, string> = {
    10: "a",
    20: "b"
}

ids[30] = "c"


// looping
for (let i: number = 0; i < 10; i++)
{
    console.log(i);
}

[1, 2, 3].forEach((v) => console.log(v));
const out: number[] = [4, 5, 6].map((i) => i * 10);