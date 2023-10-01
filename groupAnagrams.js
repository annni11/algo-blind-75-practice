var groupAnagrams = function (strs) {
  //create a log obj
  const log = {};
  //iterate over strs
  strs.forEach(str => {
    //sort each string
    const sorted = str.split('').sort();
    console.log(str.split());
    console.log(sorted);
    //add to log storted:[original]
    if (!log[sorted]) log[sorted] = [str];
    else log[sorted].push(str);
  });
  const result = Object.values(log);
  console.log(log);
  return result;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
