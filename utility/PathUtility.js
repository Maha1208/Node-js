const path = require('path');

// Joining two file paths together
const fullPath = path.join('/path/to/folder', 'file.txt');
console.log(fullPath); 

// Getting the directory name from a path
const dirName = path.dirname('/path/to/folder/file.txt');
console.log(dirName);
