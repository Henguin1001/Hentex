var fun1 = ()=>{
  console.log(this);
};
var fun2 = function(){
  console.log(this);
};
var fun3 = (()=>{
  console.log(this);
});
fun1.call({foo:"bar"});
fun2.call({foo:"bar"});
fun3.call({foo:"bar"});
