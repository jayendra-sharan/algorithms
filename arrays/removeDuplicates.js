// Given a sorted array nums, remove the duplicates in-place
// such that each element appears only once and returns the new length.
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let curIndex = 0;
  let i = 0;
  while (i < nums.length) {
      if (nums[i] != nums[i+1]) {
          curIndex++;
          nums[curIndex] = nums[i+1];
      }
      i++;
  }
  return curIndex;
};

//tests
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
// 5
console.log(removeDuplicates([1,1,2]));
// 2
