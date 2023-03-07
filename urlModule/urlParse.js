const url = require('url');
const urlString = 'https://www.nodejs.com/path/to/page?param1=value1&param2=value2#anchor';
const parsedUrl = url.parse(urlString);
console.log(parsedUrl);