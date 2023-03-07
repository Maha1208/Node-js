const querystring = require('querystring');
const queryString = 'param1=value1&param2=value2&param3=value3';
const parsedQuery = querystring.parse(queryString);
console.log(parsedQuery);