// Define a type alias for a three-dimensional coordinate tuple
type ThreeDimensionalCoord = [x: number, y: number, z: number];

// Function to add two three-dimensional coordinates
function add3DCoordinate(
  c1: ThreeDimensionalCoord,
  c2: ThreeDimensionalCoord
): ThreeDimensionalCoord {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]]; // Return the sum of corresponding elements
}

console.log(add3DCoordinate([0, 100, 0], [10, 20, 30])); // Log the result of adding two 3D coordinates

// Function to create a simple string state with getter and setter
function simpleStringStateTuple(
  initial: string
): [() => string, (v: string) => void] {
  let str: string = initial; // Initialize the string state
  return [
    () => str, // Getter function to return the current state
    (v: string) => {
      str = v; // Setter function to update the state
    },
  ];
}

const [strGetter, strSetter] = simpleStringStateTuple("hello"); // Initialize the state with "hello"

console.log(strGetter()); // Log the current state
strSetter("goodbye"); // Update the state to "goodbye"
console.log(strGetter()); // Log the updated state
