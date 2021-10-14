// Fibinacci Sequence:
// 1 1 2 3 5 8 13 21... fib(n)
// Problem: find the nth number in the sequence.

// Inefficient basic recursive solution
function fib(n) {
  if (n <= 2) return 1;

  return fib(n - 1) + fib(n - 2);
}

// Memoization: storing and reusing solutions to subproblems.
function fib_memoized(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;

  let result = fib_memoized(n - 1, memo) + fib_memoized(n - 2, memo);
  memo[n] = result;
  return result;
}

// Tabulation: store the result of a previous result in a table. Better space complexity than memoization.
function fib_tabulated(n) {
  if (n <= 2) return 1;
  const fibNumsTable = [undefined, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNumsTable[i] = fibNumsTable[i - 1] + fibNumsTable[i - 2];
  }
  return fibNumsTable[n];
}

console.log(fib(7));
console.log(fib_memoized(7));
console.log(fib_tabulated(7));
