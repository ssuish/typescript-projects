/**
 * This file demonstrates the use of generic types in TypeScript.
 * 
 * ## Generic Types
 * 
 * Generic types are best used when:
 * 
 * - You want to create reusable components that can work with a variety of data types.
 * - You need to ensure type safety while maintaining flexibility.
 * - You want to avoid code duplication by writing functions, classes, or interfaces that can handle different types.
 * - You need to create data structures like arrays, stacks, or queues that can store elements of any type.
 * 
 * By using generics, you can create more abstract and versatile code that can adapt to different data types without sacrificing type safety.
 */

/**
 * A generic function to handle API responses.
 * 
 * @param response - The response object from the API call.
 * @returns The parsed data from the response.
 */
function handleApiResponse<T>(response: Response): Promise<T> {
    // Check if the response status is OK (status code 200-299)
    if (!response.ok) {
        // If not, throw an error with the status text
        throw new Error(response.statusText);
    }
    // Parse the response body as JSON and return it as a promise of type T
    return response.json() as Promise<T>;
}

// Example usage:
// Assuming we have a type for the data we expect from the API
interface User {
    id: number;
    name: string;
    email: string;
}

// Fetch data from an API and handle the response
fetch('https://api.example.com/user/1')
    .then(response => handleApiResponse<User>(response))
    .then(user => {
        // Now we have a User object with type safety
        console.log(user.id, user.name, user.email);
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch or response handling
        console.error('Error fetching user:', error);
    });