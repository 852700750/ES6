function Parent(){
  this.name = 'parent';
  this.age = '10'
}
Parent.prototype.eat=function(){
  console.log('eat');
}
let parent = new Parent();
// console.log(parent.name);
// console.log(parent.eat());
function Child(){
  this.name = 'child'
  Parent.call(this); //继承私有属性 
}
//继承公有属性1
// Child.prototype.__proto__ = Parent.prototype;
//继承公有属性2
// Child.prototype = Object.create(Parent.prototype);
function create(parentPrototype,props){
  function Fn(){};
  Fn.prototype = parentPrototype;
  let fn = new Fn();
  for(let key in props){
    Object.defineProperty(fn,key,{
      ...props[key],
      enumerable:true

    });
  }
  return fn;
}
Child.prototype = create(Parent.prototype,{constructor:{
  value:Child
}});
let child = new Child();
// child.eat()
console.log(child.constructor);


// 3 继承共有属性和私有属性
Child.prototype = new Parent(); // 不会使用


// let a = {};
// Object.defineProperty(a,'name',{
//   // value:'1',
//   enumerable:true, //可枚举
//   get(){
//     console.log('get');
//     return 1;
//   },
//   set(value){
//     console.log(value,'000');
//   },
// })
// a.name = 100;
// console.log(a.name);