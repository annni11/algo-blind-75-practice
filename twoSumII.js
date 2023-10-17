//! this is not part of blind75 but is needed to do 3sum
//~ done on oct 17 -- watched https://www.youtube.com/watch?v=9r63o60zBRg

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * use 2 pointers - point at beginning of array and end of array - get sum
 * case 1: if sum<target - eliminate first element (pointer +=1)
 * case 2: if sum>targer - eliminate last element (pointer -=1)
 * case 3: sum === target - return
 */
const twoSum2 = function (numbers, target) {
  let pointer1 = 0; //start at 0 index
  let pointer2 = numbers.length - 1; //start at end of array

  while (pointer1 < pointer2) {
    let sum = numbers[pointer1] + numbers[pointer2];

    if (sum < target) pointer1 += 1;
    if (sum > target) pointer2 -= 1; //17
    else if (sum === target) return [pointer1 + 1, pointer2 + 1];
  }
};

console.log(twoSum2([2, 7, 11, 15], 9));
