const url = require('url');

const urlObj={
    protocol:'https:',
    hostname:"www.nodejs.com",
    pathname:'/path/to/page',
    search:"?param1=value1&param2=value2",
    hash:'#anchor'
};
const urlString =url.format(urlObj);
console.log(urlString);