var cheerio = require('cheerio'),
  fs = require('fs');
// var $ = cheerio.load(fs.readFileSync('./template.xml', 'UTF8'));
var $ = cheerio.load('<div><bar value="hello"/><bar value="world"/><bar value="te"/></div>', {xmlMode:true});

console.log($(':root').children());
