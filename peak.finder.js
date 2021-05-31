// In an array a[i] is a peak iff a[i] >= a[i-1] && a[i] >= a[i+1]
// For the edges, check only the adjacent items.

/**
 * Straight forward solution for finding a peak.
 */
function peakFinder(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 && arr[i] >= arr[i+1]) {
      return arr[i];
    } else if (i === arr.length - 1 && arr[i] >= arr[i-1]) {
      return arr[i];
    } else {
      if (arr[i] >= arr[i-1] && arr[i] >= arr[i+1]) {
        return arr[i];
      }
    }
  }
  return peaks;
}


// binary search
function binaryPeakFinder(arr) {
  let mid = Math.floor(arr.length / 2);
  if (arr[mid] < arr[mid + 1]) {
    binaryPeakFinder(arr.slice(mid + 1))
  } else if (arr[mid] < arr[mid - 1]) {
    binaryPeakFinder(arr.slice(0, mid-1))
  } else {
    return arr[mid];
  }
}

let arr = (function(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(
      Math.floor(Math.random() * 99) + 1
    );
  }
  return arr;
})(10);
  
let result = peakFinder(arr);
let result2 = binaryPeakFinder(arr);
console.log('Input', arr);
console.log('Output', result);
console.log('Output 2', result2);