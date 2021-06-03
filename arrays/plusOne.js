/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
  let i = digits.length - 1;
  let carry = 1;
  while (i >= 0) {
      const sum = digits[i] + carry;
      if (sum > 9) {
          carry = sum / 10;
          digits[i] = sum % 10;
          i--;
      } else {
          carry = 0;
          digits[i] = sum;
          break;
      }
  }
  if (carry) {
      digits.push(0);
      let i = digits.length - 1;
      while (i > 0) {
          digits[i] = digits[i-1]
          i--;
      }
      digits[0] = carry;
  }
  return digits;
};

console.log(plusOne([1,2,3]));
// [1,2,4]
console.log(plusOne([9]));
// [1, 0]
