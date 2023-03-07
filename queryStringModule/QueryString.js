const querystring = require('querystring');

const queryParams = {
    param1:'value1',
    param2:'value2',
    param3:'value3'
};

const queryString = querystring.stringify(queryParams);
console.log(queryString);