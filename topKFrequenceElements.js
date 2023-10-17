//* solved it 9/30/23 -- line 11 - Object.keys the log and sort b-a from the log, then slice to kth index
// iterate through number[] and store to hash map {number: frequency}, then Object.keys the hash, sort it (b-a), and slice it to the kth index

const topKFrequent = function (nums, k) {
  const log = {};

  nums.forEach(num => {
    if (!log[num]) log[num] = 1;
    else log[num] += 1;
  });
  console.log(log);
  const result = Object.keys(log)
    .sort((a, b) => log[b] - log[a])
    .slice(0, k);

  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // 1,2
console.log(topKFrequent([1, 2], 2)); //1,2

// var topKFrequent = function (nums, k) {
//   const log = {};
//   const result = [];
//   nums.forEach(num => {
//     if (!log[num]) log[num] = 1;
//     else log[num] += 1;
//   });

//   let max = Math.max(...Object.values(log)); //3
//   console.log(log);
//   for (let key in log) {
//     if (k > 0) {
//       if (log[key] === max) result.push(key);
//     }
//     max--;
//     k -= 1;
//   }
//   return result;
// };
