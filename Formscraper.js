const request = require('request-promise');
const cheerio = require('cheerio');


(async () => {
console.log(`Initial request to get the csrf_token value..`);
let initialRequest = await request({
uri:'http://quotes.toscrape.com/login',
method: 'GET'
});
debugger;
})();