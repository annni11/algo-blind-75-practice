/**
 *
 * @param {number[]} nums
 * @return {number[]}
 * *Following neetcode - using prefix / postfix
 */

const productExceptSelf = function (nums) {
  const result = [];
  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    postfix *= nums[i + 1];
    result[i] *= postfix;
  }

  return result;
};

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
//console.log(productExceptSelf([-1, 1, 0, -3, 3])); //[0,0,9,0,0]

//! this only works if there's no 0 -- any number divided by 0 is NaN
// var productExceptSelf = function(nums) {
//     const product = nums.reduce((a, b) => a * b);
//   const result = nums.map(num => product / num);

//   return result;
// };

//! this works but it's O(n2)? time complexity
// const productExceptSelf = function (nums) {

//     const enqueue = [...nums];
//     const dequeue = [];
//     const result = [];

//     for (let i = 0; i < nums.length; i++) {
//       dequeue.push(enqueue.pop());
//       result.push(enqueue.reduce((a, b) => a * b));
//       enqueue.unshift(dequeue.pop())
//     }

//     return result;
//   };
