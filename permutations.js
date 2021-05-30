// Function to generate all permutations from given
// range
function generatePermutations(perm, range) {
  if (perm.length === range) {
    console.log(perm);
    return;
  }
  for (let i = 0; i < range; i++) {
    if (perm.indexOf(i) < 0) {
      perm.push(i);
      generatePermutations(perm, range);
      perm.pop();
    }
  }
}

// example
// generatePermutations([], 4);

// extend the above function to generate all permutations of a string.
// input: abc
function getPermutations(perms, strArr) {
  if (perms.length === strArr.length) {
    console.log(perms.join(''));
    return;
  }
  for (let i = 0; i < strArr.length; i++) {
    if (perms.indexOf(strArr[i]) < 0) {
      perms.push(strArr[i]);
      getPermutations(perms, strArr);
      perms.pop();
    }
  }
}
function permutations(str) {
  getPermutations([], str.split(''));
}

const str = 'aba';
permutations(str);
