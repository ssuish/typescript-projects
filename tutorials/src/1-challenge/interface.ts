import houses from "./house.json"; // Importing the houses data from a JSON file

interface House {
  name: string; // The name of the house
  planets: string | string[]; // The planets associated with the house, can be a string or an array of strings
}

interface HouseWithID {
  id: number; // Unique identifier for the house
}

function findHouses(houses: string): HouseWithID[]; // Function overload for string input
function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWithID[]; // Function overload for string input with a filter
function findHouses(houses: House[]): HouseWithID[]; // Function overload for array input
function findHouses(
  houses: House[],
  filter: (house: House) => boolean
): HouseWithID[]; // Function overload for array input with a filter

function findHouses(house: unknown, filter?: unknown): HouseWithID[] {
  const houses = typeof house === "string" ? JSON.parse(house) : house; // Parse the house data if it's a string, otherwise use it directly
  const houseID = houses.map((houseName: House, index: number) => ({
    id: index, // Assign a unique ID to each house
    ...houseName, // Spread the properties of the house
  }));

  return houseID.filter(filter); // Apply the filter if provided
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides") // Find houses with the name "Atreides" from the JSON string
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen")); // Find houses with the name "Harkonnen" from the array
