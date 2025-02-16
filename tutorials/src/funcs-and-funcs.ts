export function printToFile(text: string, callback: () => void): void {
  console.log(text); // Log the text to the console
  callback(); // Execute the callback function
}

export type MutationFunction = (v: number) => number; // Define a type alias for a function that takes a number and returns a number

export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate); // Apply the mutate function to each element in the numbers array
}

const myNewMutationFunc: MutationFunction = (v: number) => v * 100; // Define a mutation function that multiplies a number by 100

console.log(arrayMutate([1, 2, 3], (v) => v * 10)); // Log the result of applying a mutation function that multiplies each number by 10

export type AdderFunction = (v: number) => number; // Define a type alias for a function that takes a number and returns a number

// function returning a function, similar to a JavaScript closure
export function createAdder(num: number) {
  return (val: number) => num + val; // Return a function that adds 'num' to 'val'
}

const addOne = createAdder(1); // Create an adder function that adds 1

// will add one
console.log(addOne(55)); // Log the result of adding 1 to 55
