// Exercise 1
// Write a C program to print all natural numbers from 1 to n
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

// Exercise 2
// Write a C program to print all natural numbers in reverse (from n to 1).
// let n = 5;
// for (let i = n; i >= 1; i--) {
//   console.log(i);
// }

// Exercise 4
// Write a C program to print all even numbers between 1 to 100.
// for (let i = 2; i <= 100; i += 2) {
//   console.log(i);
// }

// Exercise 5
// Write a C program to print all odd number between 1 to 100.
// for (let i = 1; i <= 100; i += 2) {
//   console.log(i);
// }

// Exercise 6
// Write a C program to find sum of all natural numbers between 1 to n.
// let initialN = 0;
// let n = 100;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum = initialN += i;
// }
// console.log(sum);

// Exercise 7
// Write a C program to find sum of all even numbers between 1 to n.
// let initialN = 0;
// let n = 100;
// let sum = 0;
// for (let i = 0; i <= n; i += 2) {
//   sum = initialN += i;
// }
// console.log(sum);

// Exercise 8
// Write a C program to find sum of all odd numbers between 1 to n.
// let initialN = 0;
// let n = 100;
// let sum = 0;
// for (let i = 1; i <= n; i += 2) {
//   sum = initialN += i;
// }
// console.log(sum);

// Exercise 9
// Write a C program to print multiplication table of any number.
// let n = 8;
// for (let i = 1; i < 10; i++) {
//   let hurd = n + " * " + i + " = " + n * i;
//   console.log(hurd);
// }
let n = 1000;
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
}
let last = arr.pop();
let first = arr.shift();
let sum = last + first;
console.log(sum);
