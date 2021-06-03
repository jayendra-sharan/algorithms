// Given an integer array nums, return true
// if any value appears at least twice in the array,
// and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  const numsHash = {};
  for (let i = 0; i < nums.length; i++) {
      if (numsHash[nums[i]]) {
          return true;
      } else {
          numsHash[nums[i]] = true;
      }
  }
  return false;
};

// using Set
var containsDuplicateUsingSet = function(nums) {
    const setNums = new Set(nums);
    if (setNums.size < nums.length) {
        return true;
    } else {
        return false;
    }
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
// true
console.log(containsDuplicate([1,2,3,4]));
// false
console.log(containsDuplicate([1,2,3,1]));
// false
