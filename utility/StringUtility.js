const string = require('string');
// Formatting a string using placeholders
const name = 'John';
const age = 30;
const message = string.format('My name is %s and I am %d years old.', name, age);
console.log(message);
