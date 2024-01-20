function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set(); // Initialize an empty Set to store seen numbers
  for (const number of array) {
    const complement = target - number;

    // Check if the complement is in the Set
    if (seenNumbers.has(complement)) return true;

    // Add the current number to the Set
    seenNumbers.add(number);
  }

  // If no pair is found, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time complexity: O(n)
*/

/* 
  Add your pseudocode here
  - Initialize an empty Set to store seen numbers
  - Iterate over the array of numbers
    - Calculate the complement (target - current number)
    - Check if the complement is in the Set
      - If yes, return true (a pair is found)
    - Add the current number to the Set
  - If no pair is found, return false
*/

/*
  Add written explanation of your solution here
  This function iterates through the array once, using a Set to keep track of numbers that have been seen. For each number, it calculates the complement needed to reach the target sum. If the complement is already in the Set, it means a pair has been found, and the function returns true. If no pair is found after iterating through the array, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
