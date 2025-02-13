interface Coordinate {
  x: number; // The x-coordinate
  y: number; // The y-coordinate
}

// Function overloading
function parseCoordinate(str: string): Coordinate; // Overload for string input
function parseCoordinate(obj: Coordinate): Coordinate; // Overload for object input
function parseCoordinate(x: number, y: number): Coordinate; // Overload for two number inputs

// Unknown: similar to any but have to cast it
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  }; // Initialize a default coordinate

  if (typeof arg1 === "string") {
    // If the first argument is a string
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":"); // Split the string into key-value pairs
      coord[key as "x" | "y"] = parseInt(value, 10); // Assign the parsed value to the corresponding coordinate property
    });
  } else if (typeof arg1 === "object") {
    // If the first argument is an object
    coord = {
      ...(arg1 as Coordinate), // Spread the properties of the object into the coordinate
    };
  } else {
    // If the arguments are numbers
    coord = {
      x: arg1 as number, // Assign the first argument to x
      y: arg2 as number, // Assign the second argument to y
    };
  }

  return coord; // Return the parsed coordinate
}

console.log(parseCoordinate(10, 20)); // Log the result of parsing two numbers
console.log(parseCoordinate({ x: 52, y: 35 })); // Log the result of parsing an object
console.log(parseCoordinate("x:12,y:22")); // Log the result of parsing a string
