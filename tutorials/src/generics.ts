// Function to create a simple state with getter and setter using generics
function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial; // Initialize the state with the generic type T
  return [
    () => val, // Getter function to return the current state
    (v: T) => {
      val = v; // Setter function to update the state
    },
  ];
}

const [st1Getter, st1Setter] = simpleState(10); // Initialize the state with a number

console.log(st1Getter()); // Log the current state

st1Setter(62); // Update the state to 62

console.log(st1Getter()); // Log the updated state

const [st2Getter, st2Setter] = simpleState<string | null>(null); // Initialize the state with a string or null

console.log(st2Getter()); // Log the current state

st2Setter("str"); // Update the state to "str"

console.log(st2Getter()); // Log the updated state

interface Rank<RankItem> {
  item: RankItem; // The item being ranked
  rank: number; // The rank of the item
}

// Function to rank items using a ranking function
function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item, // The item
    rank: rank(item), // The rank of the item
  }));

  ranks.sort((a, b) => a.rank - b.rank); // Sort the items by rank

  return ranks.map((rank) => rank.item); // Return the sorted items
}

interface Pokemon {
  name: string; // The name of the Pokemon
  hp: number; // The HP of the Pokemon
}

const pokemon: Pokemon[] = [
  {
    name: "Bulbaser",
    hp: 20,
  },
  {
    name: "Megasaur",
    hp: 5,
  },
];

const ranks = ranker(pokemon, ({ hp }) => hp); // Rank the Pokemon by their HP
console.log(ranks); // Log the ranked Pokemon
