// iterative
function gcd(a, b) {
  const smallest = a < b ? a : b;
  let result = 0;
  for (let i = 2; i <= smallest; i++) {
    if (a % i === 0 && b % i === 0) {
      result = i;
    }
  }
  return result;
}

// find GCD using Euclidean Algorithm 
function euclidGcd(a, b) {
  if (a === 0) {
    return b;
  }
  return euclidGcd(b % a, a)
}

// find GCD of N numbers
function findGcd(arr) {
  let result = arr[0];
  for (let i = 0; i < arr.length; i++) {
    result = euclidGcd(arr[i], result);
    if (result === 1) {
      return 1;
    }
  }
  return result;
}
console.log(gcd(10, 5))
console.log(euclidGcd(357, 234));
console.log(findGcd([2, 4, 6, 8, 16]));

