// Function to print an ingredient with an optional extra detail
function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ""}`); // Log the quantity, ingredient, and extra if provided
}

printIngredient("1C", "Flour"); // Call the function without the extra parameter
printIngredient("1C", "Flour", "something more"); // Call the function with the extra parameter

interface User {
  id: string; // User ID
  info?: {
    email?: string; // Optional email within an optional info object
  };
}

// Function to get the email of a user, using non-null assertion
function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!; // Return the email if info exists, using non-null assertion
  }

  return ""; // Return an empty string if info does not exist
}

// Optional chaining
function getEmailBetter(user: User): string {
  return user?.info?.email ?? ""; // Return the email using optional chaining, or an empty string if not available
}

// Optional callback
function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y]); // Log the numbers
  callback?.(); // Execute the callback if provided
}
