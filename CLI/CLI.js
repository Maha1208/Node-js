const readline = require('readline');

// create a readline interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const handleInput = (input) => {
  console.log(`You entered: ${input}`);
};

// ask the user for input
rl.question('Enter some text: ', handleInput);