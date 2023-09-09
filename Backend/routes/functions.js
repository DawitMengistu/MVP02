function getUsers(length, array) {
    // Create an empty array to store the users.
    const results = [];
  
    // Loop through the user array.
    for (let i = 0; i < array.length; i++) {
      // If the user is within the given length, add it to the results array.
      if (i < length) {
        results.push(array[i]);
      }
    }
  
    // Return the results array.
    return results;
  }
  

export default getUsers;