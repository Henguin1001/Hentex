var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

var Compiler = require('../index.js');
describe('Compiler', function() {
  describe('#extend() and #render()', function() {
    it('should add new method to context and render', function() {
      var c = new Compiler();
      c.extend("test",{
        method:(c, p, cb)=>{
            cb(null, "test");
        }
      });
      var res = c.render("<test/>",{});
      return res.should.eventually.equal("test");
    });
    it('should resolve arguments', function() {
      var c = new Compiler();
      c.extend("test",{
        method:(c, p, cb)=>{
            cb(null, p.attr.arg);
        }
      });
      var res = c.render('<test arg="myarg"/>',{});
      return res.should.eventually.equal('myarg');
    });
    it('should resolve globals', function() {
      var c = new Compiler();
      c.extend("test",{
        method:(c, p, cb)=>{
            cb(null, p.globals.test);
        }
      });
      var res = c.render('<test/>',{test:"globalvar"});
      return res.should.eventually.equal('globalvar');
    });
    it('should allow cascading methods', function() {
      var c = new Compiler();
      c.extend("foo",{
        method:(c, p, cb)=>{
          cb(null, p.attr.arg+c[0]);
        }
      });
      c.extend("bar",{
        method:(c, p, cb)=>{
            cb(null, p.globals.test);
        }
      });
      var res = c.render('<foo arg="myarg"><bar/></foo>',{test:"globalvar"});
      return res.should.eventually.equal('myargglobalvar');
    });
  });
});
