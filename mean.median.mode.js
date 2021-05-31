let arr = (function(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(
      Math.floor(Math.random() * 10) + 1
    );
  }
  return arr;
})(10);


function findMean(arr) {
  const sum = arr.reduce((acc, item) => acc + item, 0);
  return sum / arr.length;
}

function findMedian(arr) {
  const sorted = arr.sort((a, b) => a-b);
  if (arr.length % 2 === 0) {
    const mid = arr.length / 2;
    return (sorted[mid] + sorted[mid - 1]) / 2;
  } else {
    const mid = Math.floor(arr.length / 2);
    return sorted[mid];
  }
}

function findMode(arr) {
  const hash = {};
  let max = -1;
  let mode = -1;
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] === undefined) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]]++;
    }
    if (hash[arr[i]] >= max) {
      max = hash[arr[i]];
      mode = arr[i];
    }
  }
  return mode;
}

console.log('Input', arr);
console.log('Sorted', arr.slice().sort((a, b) => a-b));
console.log('Mean', findMean(arr.slice()));
console.log('Median', findMedian(arr.slice()));
console.log('Mode', findMode(arr.slice()));