/* ********** while loops *********** */
let pizzasLeft = 4;
while (pizzasLeft >= 1) {
  console.log('I have ', pizzasLeft, ' pizzas left');
  pizzasLeft--;
}

let iHavePizzas = false;
while (iHavePizzas) {
  console.log('why doesnt this run?');
}

// let iHavePizzas = true;
// while (iHavePizzas) {
//   console.log('i never eat so this runs forever');
//   // (or until my computer runs out of memory)
// }

// let pizzasLeft = 4;
// // don’t get yourself in an infinite loop!
// while (pizzasLeft >= 1) {
//   console.log('I have ', pizzasLeft, ' left');
// }

/* ********** for loops *********** */
for (let i = 1; i <= 5; i++) {
  console.log('current day: ', i);
}

// loop in either direction (in this case, backward)
for (let i = 5; i >= 1; i--) {
  console.log('current index: ', i);
}

// can increment by any number (in this case, 100)
for (let i = 100; i <= 400; i += 100) {
  console.log('current index: ', i);
}

// use for loops to iterate through a string
let letters = 'bumfuzzle';
for (let i = 0; i < letters.length; i++) {
 let currentLetter = letters[i];
  console.log(currentLetter);
}

// continue causes loop to skip to the next iteration
let word = 'Twitter';
let newWord = '';
for (let i = 0; i < word.length; i++) {
  if (word[i] === 'w') {
    continue;
  }
  newWord += word[i];
}
console.log('newWord: ', newWord);
// continue also works in while loops


// break breaks out of the loop permanently
let programmingLanguage = 'C';
while (true) {
  programmingLanguage += '+';
  if (programmingLanguage.length === 3) {
    break;
  }
}
console.log(programmingLanguage);

// break also works in for loops


