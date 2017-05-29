
class Package {
  constructor(contents) {
    this.contents = contents;
  }
  chain(context){
    var contents = this.contents;
    Object.keys(this.contents).forEach(function(name) {
      context.addMethod(name, contents[name]);
    });
  }
}
module.exports = Package;
