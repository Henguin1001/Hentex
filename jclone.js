module.exports = function(element){
  var temp = element.get;
  element.get = function() {
    var output = [];
    var result =
    this.each(function(index, item) {
      output[index] = Object.assign({}, item, {
        toString:function(){
          return item.text();
        }
      });
    });

    return cheerio(odds);
  }
}
