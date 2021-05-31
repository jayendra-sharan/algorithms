(function(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(
      Math.floor(Math.random() * 99) + 1
    );
  }
  return arr;
})(10);
