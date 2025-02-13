function addNUmbers(a: number, b: number): number {
  return a + b;
}

// avoid any type in typescript

export default addNUmbers;

// const functions
export const addStrings = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`;

export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

// all arguments passed beyond salutation will be stored on names string array
function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}

// user is defined before dereferencing
export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`;
}
