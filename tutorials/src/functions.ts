function addNUmbers(a: number, b: number): number {
  return a + b; // Return the sum of 'a' and 'b'
}

// avoid any type in typescript

export default addNUmbers; // Export 'addNUmbers' as the default export

// const functions
export const addStrings = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`; // Concatenate 'str1' and 'str2' with a space in between

export const format = (title: string, param: string | number): string =>
  `${title} ${param}`; // Concatenate 'title' and 'param' with a space in between

export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param)); // Log the formatted string to the console
};

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`); // Return a resolved promise with a string

// all arguments passed beyond salutation will be stored on names string array
function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`; // Concatenate 'salutation' and all 'names' with spaces in between
}

// user is defined before dereferencing
export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`; // Return the user's full name, using default values if properties are missing
}
