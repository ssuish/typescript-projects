export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

export type MutationFunction = (v: number) => number;

export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

const myNewMutationFunc: MutationFunction = (v: number) => v * 100;

console.log(arrayMutate([1, 2, 3], (v) => v * 10));

export type AdderFunction = (v: number) => number;

// function returning a function, similar Javascript closure
export function createAdder(num: number) {
  return (val: number) => num + val;
}

const addOne = createAdder(1);

// will add one
console.log(addOne(55));
