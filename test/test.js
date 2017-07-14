var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
var util = require('util');
var Compiler = require('../index.js');
describe('Compiler', function() {
  describe('Extending Methods', function() {
    it('should add new method to context and render', function() {
      var c = new Compiler();
      c.extend("test",{
        method:(cb)=>{
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
            cb(null, p.attributes.arg);
        }
      });
      var res = c.render('<test arg="myarg"/>',{});
      return res.should.eventually.equal('myarg');
    });
    it('should resolve globals', function() {
      var c = new Compiler();
      c.extend("test",{
        method:($, e, p, cb)=>{
            cb(null, p.globals.test);
        }
      });
      var res = c.render('<test/>',{test:"globalvar"});
      return res.should.eventually.equal('globalvar');
    });
    it('should resolve jquery scope', function() {
      var c = new Compiler();
      c.extend("test",{
        method:function($, cb){
            cb(null, $(this).data('foo'));
        }
      });
      var res = c.render('<test data-foo="bar"/>',{});
      return res.should.eventually.equal('bar');
    });
    it('should allow cascading methods', function() {
      var c = new Compiler();
      c.extend("foo",{
        method:function($, e, p, cb){
          cb(null, p.attributes.arg+$(this).children().text());
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
  describe('Extending Templates', function() {
    it('should render a plain template', function() {
      var c = new Compiler();
      c.extend("foo",{
        method:function(cb){
          cb(null, "testdata");
        },
        template:{
          render:function(parameters){
            return parameters.data;
          }
        }
      });
      var res = c.render('<foo/>');
      return res.should.eventually.equal('testdata');
    });
    it('should render twig templates', function() {
      var c = new Compiler();
      c.extend("foo",{
        method:function(cb){
          cb(null, "testdata");
        },
        template:"{{data}}"
      });
      var res = c.render('<foo/>');
      return res.should.eventually.equal('testdata');
    });
  });
});
