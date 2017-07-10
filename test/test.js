var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
var util = require('util');
var Compiler = require('../index.js');
describe('Compiler', function() {
  describe('#extend() and #render()', function() {
    it('should add new method to context and render', function() {
      var c = new Compiler();
      c.extend("test",{
        method:($, e,p, cb)=>{
            cb(null, "test");
        }
      });
      var res = c.render("<test/>",{});
      return res.should.eventually.equal("test");
    });
    it('should resolve arguments', function() {
      var c = new Compiler();
      c.extend("test",{
        method:($, e, p, cb)=>{
            cb(null, p.attr.arg);
        }
      });
      var res = c.render('<test arg="myarg"/>',{});
      return res.should.eventually.equal('myarg');
    });
    it('should resolve globals', function() {
      var c = new Compiler();
      c.extend("test",{
        method:($, e,p, cb)=>{
            cb(null, p.globals.test);
        }
      });
      var res = c.render('<test/>',{test:"globalvar"});
      return res.should.eventually.equal('globalvar');
    });
    it('should resolve jquery scope', function() {
      var c = new Compiler();
      c.extend("test",{
        method:function($, e,p, cb){
            cb(null, $(this).data('foo'));
        }
      });
      var res = c.render('<test data-foo="bar"/>',{});
      return res.should.eventually.equal('bar');
    });
    it('should allow cascading methods', function() {
      var c = new Compiler();
      c.extend("foo",{
        method:($, e, p, cb)=>{
          cb(null, p.attr.arg+p.children[0]);
        }
      });
      c.extend("bar",{
        method:($, e, p, cb)=>{
            cb(null, p.globals.test);
        }
      });
      var res = c.render('<foo arg="myarg"><bar/></foo>',{test:"globalvar"});
      return res.should.eventually.equal('myargglobalvar');
    });
  });
});
