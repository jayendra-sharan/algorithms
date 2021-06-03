// Given a non-empty array of integers nums, every
// element appears twice except for one.
// Find that single one.
/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
      if (hash[nums[i]] === undefined) {
          hash[nums[i]] = 1;
      } else {
          hash[nums[i]]++;
      }
  }
  for (let i = 0; i < nums.length; i++) {
      if (hash[nums[i]] < 2) {
          return nums[i];
      }
  }
};


// tests
console.log(singleNumber([2,2,1]));
// 1
console.log(singleNumber([4,1,2,1,2]));
// 4
console.log(singleNumber([1]));
// 1
