function Parent(){
  this.name = 'parent-name'
}
Parent.prototype.smoking = function(){
  console.log('smoking');
}
let parent = new Parent();
console.log(parent.name);
parent.smoking();
function Child (){
  this.age = '11'
  Parent.call(this);
}
Child.prototype = myCreat(Parent.prototype);
// Child.prototype = Object.create(Parent.prototype);  //1
// Child.prototype.__proto__ = Parent.prototype;  //2
let child = new Child(); 
child.smoking()
console.log(child.name);

function myCreat(parentPrototype,props){
  Fn.prototype = parentPrototype;
  function Fn(){}
  let fn = new Fn();
  for( key in props){
    Object.defineProperty(fn,key,{
      ...props[key],
      enumerable:true
    });
  }
  return fn;
}