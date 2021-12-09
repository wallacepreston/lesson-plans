console.log('\x1Bc'); // clears the console each run

/* **** function declarations **** */

// when we run this, nothing happens... 
function imAFunction() {
  console.log('hello world');
}

/* **** invoking a function **** */
imAFunction();
// imAFunction();

// -----------------------------------------------

/* **** parameters and arguments **** */
function hello(name) {
  console.log('hello ' + name);
}
hello();
hello('Bob');
/* the function can be called multiple times with the same argument */
hello('Dave');
/* we can pass variables */
let person = 'Sally';
/* the parameter name does not have to match what we pass in */
hello(person);

/* **** multiple parameters **** */
function hello(firstName, lastName) {
  console.log('hello ' + firstName + ' ' + lastName);
}
hello();
// order matters
hello('Bob', 'Smith');

// -----------------------------------------------

/* **** returning values **** */
function plus(a, b) {
  let sum = a + b;
  return sum;
}
// nothing happens when we call it
plus(10, 5);
// to get it to log to the console:
console.log(plus(10, 5));

let x = 3 + plus(10, 5);
console.log(x);
// -----------------------------------------------

/* **** combining functions **** */
function multiply(a, b) {
  return a * b;
}

// we can pass function calls as arguments to other functions
let y = multiply(plus(10, 5), 2);
console.log(y);

/* **** more practice with return **** */
function isEven(x) {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// we can use functions in logic of our code
let num = 10;
if (isEven(num)) {
  console.log(num + ' is Even');
} else {
  console.log(num + ' is Odd');
}
