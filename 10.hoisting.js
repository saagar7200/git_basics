//! Hoisting
// GEC

// memory creation phase [EC creation]  &  execution phase

// phase 1
// x: undefined
// hoist:() { console.log("hoisted function"); }
// phase II
// x: 20

console.log(x); // undefined

var x = 20;

console.log(x); // 20

hoist(); //
console.log(hoist);

function hoist() {
  console.log("hoisted function");
}

//

// add(12, 3);
// add(120, 30);
// add(12, 3);
// add(12, 3);
// add(12, 3);
// phase I phase 2

function add(a, b) {
  console.log(a + b);
  two();
}

// GEC

// console.log(y);
const y = 30;

// TDZ

// function expression

console.log(func1);

// console.log(func1());

var func1 = function () {
  console.log("var function");
};
console.log(func1);

func1();

let x = 30;
let x = 345;

// typescript
// git/github
