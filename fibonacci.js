function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n-1) + fibonacci(n-2);
}


function fastFibonacci(n) {
  let cache = [0, 1];
  if (n <= 1) {
    return cache[n]
  }
  for (let i = 2; i <= n; i++) {
    cache[i] = cache[i-1] + cache[i-2];
  }
  return cache[n]
}

console.log(fibonacci(40));
console.log(fastFibonacci(40))