const twoSum = function (nums, target) {
  const log = {};
  let diff;
  for (let i = 0; i < nums.length; i++) {
    if (log[nums[i]] !== undefined) return [log[nums[i]], i];
    diff = target - nums[i];
    console.log(diff);
    log[diff] = i;
    console.log(log);
  }
};

console.log(twoSum([2, 11, 7, 15], 9));
// const cache = {}
// const four = 4
// cache[four] = "HOLY"
// const orf = 4
// console.log(cache[orf])

// const twoSum = function (nums, target) {
//     const log = {};
//     let diff;
//     for (let i = 0; i < nums.length; i++) {
//       if (log[nums[i]] !== undefined) {
//         // If the number exists in the log, return the indices of both numbers
//         return [log[nums[i]], i];
//       }
//       diff = target - nums[i];
//       log[diff] = i;
//       console.log(log)
//     }

//   };
