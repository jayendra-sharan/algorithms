// n-queen problem: For a given n, find the permutations such that
// it is possible to place n queens in a n x n chessboard.
function canExtendToSolution (perm) {
  let i = perm.length - 1;
  for (var j = 0; j < i; j++) {
    if (i - j === Math.abs(perm[i] - perm[j])) {
      return false;
    }
  }
  return true;
}
let found = false;
function extend (perm, range) {
  if (!found) {
    if (perm.length === range) {
      found = true;
      console.log(perm);
    }
    for (let i = 0; i < range; i++) {
      if (perm.indexOf(i) < 0) {
        perm.push(i);
        if (canExtendToSolution(perm)) {
          extend(perm, range);
        }
        perm.pop();
      }
    }
  }
}

extend([], 20);