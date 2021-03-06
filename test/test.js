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
    it('should allow multple root elements', function() {
      var c = new Compiler();
      c.extend("foo",{
        method:function($, e, p, cb){
          cb(null, "foo"+$(this).text());
        }
      });
      c.extend("bar",{
        method:function($, e, p, cb){
            cb(null, "bar");
        }
      });
      var res = c.render('<foo/><bar/>');
      return res.should.eventually.equal('foobar');
    });
    it('should allow multple root elements', function() {
      var c = new Compiler();
      c.extend("foo",{
        method:function($, e, p, cb){
          cb(null, "foo"+$(this).text());
        }
      });
      c.extend("bar",{
        method:function($, e, p, cb){
            cb(null, "bar");
        }
      });
      var res = c.render('<foo><foo/><bar/></foo><bar/>');
      return res.should.eventually.equal('foofoobarbar');
    });
    it('async functions should go in order', function() {
      var c = new Compiler();
      c.extend("foo",{
        method:function($, e, p, cb){
          cb(null, "foo"+$(this).text());
        }
      });
      c.extend("bar",{
        method:function($, e, p, cb){
          setTimeout(function () {
            cb(null, "bar");
          }, 100);
        }
      });
      var res = c.render('<foo><bar/></foo>');
      return res.should.eventually.equal('foobar');
    });
    it('async functions should go in order', function() {
      var c = new Compiler();
      c.extend("foo",{
        method:function($, e, p, cb){
          cb(null, "foo");
        }
      });
      c.extend("bar",{
        method:function($, e, p, cb){
          setTimeout(function () {
            cb(null, "bar"+$(e).text());
          }, 100);
        }
      });
      var res = c.render('<bar><foo/></bar>');
      return res.should.eventually.equal('barfoo');
    });
    it('multiple root functions should go in order', function() {
      var c = new Compiler();

      c.extend("foo",{
        method:function($, e, p, cb){
          cb(null, "foo"+$(this).text());
        }
      });
      c.extend("bar",{
        method:function($, e, p, cb){
          setTimeout(function () {
            cb(null, "bar"+$(e).text());
          }, 100);
        }
      });
      var res = c.render('<bar/><foo/>');
      return res.should.eventually.equal('barfoo');
    });
    it('multiple root functions should go in order', function() {
      var c = new Compiler();

      c.extend("foo",{
        method:function($, e, p, cb){
          cb(null, "foo"+$(this).text());
        }
      });
      c.extend("bar",{
        method:function($, e, p, cb){
          setTimeout(function () {
            cb(null, "bar"+$(e).text());
          }, 100);
        }
      });
      var res = c.render('<foo/><bar/>');
      return res.should.eventually.equal('foobar');
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
    it('should render recursive templates', function() {
      var c = new Compiler();
      var res = c.render('<template name="foo">foo{{attributes.val}}</template><template name="bar"><foo val="{{1}}"/></template><bar/>');
      return res.should.eventually.equal('foo1');
    });
    it('should render recursive templates', function() {
      var c = new Compiler();
      var res = c.render('<template name="foo">foo{{attributes.val}}</template><template name="bar"><foo val="{{1}}"/><foo val="{{2}}"/></template><bar/>');
      return res.should.eventually.equal('foo1foo2');
    });
    it('should render recursive templates', function() {
      var c = new Compiler();
      var res = c.render('<template name="foo">foo{{attributes.val}}</template><template name="bar">{% for i in 0..2%}<foo val="{{i}}"/>{% endfor %}</template><bar/>');
      return res.should.eventually.equal('foo0foo1foo2');
    });
    it('should render disordered templates', function() {
      var c = new Compiler();
      var res = c.render('<template name="bar"><foo val="{{1}}"/></template><template name="foo">foo{{attributes.val}}</template><bar/>');
      return res.should.eventually.equal('foo1');
    });
    it('should update templates', function() {
      var c = new Compiler();
      c.update("foo",{
        method:function(cb){
          cb(null, "testdata");
        },
        template:"{{data}}"
      });
      var res = c.render('<foo/>');
      return res.should.eventually.equal('testdata');
    });
    it('should update existing templates', function() {
      var c = new Compiler();
      c.extend("foo",{
        method:function(cb){
          cb(null, "testdata");
        },
        template:"{{data ~ 'words'}}"
      });
      c.update("foo",{
        method:function(cb){
          cb(null, "testdata");
        },
        template:"{{data}}"
      });
      var res = c.render('<foo/>');
      return res.should.eventually.equal('testdata');
    });
    it('should prevent template from running', function() {
      var c = new Compiler();
      c.extend("bar",{
        method:function(cb){
          cb(null, "bar");
        }
      });

      var res = c.render('<template name="foo">{% if globals.test %}<bar/>{% endif %}</template><foo/>', {test:false});
      return res.should.eventually.equal('');
    });
    it('should allow template to run', function() {
      var c = new Compiler();
      c.extend("bar",{
        method:function(cb){
          cb(null, "bar");
        }
      });
      var res = c.render('<template name="foo">{% if globals.test %}<bar/>{% endif %}</template><foo/>', {test:true});
      return res.should.eventually.equal('bar');
    });
  });
  describe('Rendering Files', function() {
    it('should load a file',function(){
      var c = new Compiler();
      c.extend("foo",{
        method:function(cb){
          cb(null, "testdata");
        },
      });
      var res = c.renderFile('./test/template.xml');
      return res.should.eventually.equal('testdata\n');
    });
  });
  describe('Formatting', function() {
    it('should decode entities',function(){
      var c = new Compiler();
      var res = c.render('<template name="test">'+"''</template><test/>");
      return res.should.eventually.equal("''");
    });
    it('should decode entities',function(){
      var c = new Compiler();
      var res = c.render('<template name="test">{% for ans in '+"'a'..'d'" +"%}{{ans}}{% endfor %}</template><test/>");
      return res.should.eventually.equal("abcd");
    });
  });
});
