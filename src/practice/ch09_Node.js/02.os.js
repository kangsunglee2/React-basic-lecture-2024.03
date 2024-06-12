const os = require('os');
// const url = require('url');

console.log(os.hostname(), os.platform(), os.type());

const url = new URL('https://www.coupang.com/np/categories/332230?page=3')
console.log(url.href);
console.log(url.protocol);
console.log(url.pathname);
console.log(url.search);
console.log(url.searchParams);

