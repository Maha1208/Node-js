const readline = require('readline');

// create a readline interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// define a function that handles user input
const handleInput = (input) => {
  // perform some action based on the user input
  console.log(`You entered: ${input}`);
};

// ask the user for input
rl.question('Enter some text: ', handleInput);