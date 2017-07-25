var cheerio = require('cheerio-iterable');
module.exports = function(content) {
  var $ = cheerio.load('<top_element>' + content + '</top_element>', {xmlMode:true});
  var output = "var twig = require('twig').twig; module.exports = ";
  output += "[" + $('template').map((e)=>"['" + e.attr('name') + "',twig({data:'"+ JSON.stringify(String(e.html())) + "'})]").join(',') + "];";
  console.log(output);
  return output;
};
