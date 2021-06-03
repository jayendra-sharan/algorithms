// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add
// up to target.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  const parts = {};
  for (let i = 0; i < nums.length; i++) {
      const otherNum = target - nums[i];
      if (parts[otherNum] !== undefined) {
          return [parts[otherNum], i];
      } else {
          parts[nums[i]] = i;
      }
  }
};

console.log(twoSum([2,7,11,15], 9));
// [0,1]
console.log(twoSum([3,2,4], 6));
// [1,2]
console.log(twoSum([3,3], 6));
// [0,1]
