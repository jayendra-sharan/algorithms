let arr = (function(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(
      Math.floor(Math.random() * 99) + 1
    );
  }
  return [5,4,3,2,1];
})(10);

function swap(arr, source, dest) {
  let temp = arr[source];
  arr[source] = arr[dest];
  arr[dest] = temp;
}

// 12, 11, 13, 5, 6
// 11, 12, 13, 5, 6

function sortInsertion(arr) {
  for (i = 1; i < arr.length; i++) {
    for (j = i; j >=0; j--) {
      if (arr[j-1] >= arr[j]) {
        swap(arr, j-1, j);
      }
    }
  }
  return arr;
}

console.log('Input:', arr);
console.log('Insertion sorted: ', sortInsertion(arr.slice()));
