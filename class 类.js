//  类的继承
//类的三种属性     公有属性（__proto__） 私有属性（实例自带） 静态方法（静态属性）
//继承公有属性
function Parent(){
  this.name = 'parentname'
  //构造函数中的this 如果是通过new调用的那么this是指向当前实例
}
Parent.prototype.eat = function(){//原型上有个constructor属性
  console.log('eat');
}
console.log(Parent.prototype.constructor === Parent);
// parent(); // ===>this widow
//继承私有属性
//继承公有属性和私有属性

let parent = new Parent();
function Child(){
  this.age = '1',
  Parent.call(this);
}

//继承公有属性1
Child.prototype.__proto__ = Parent.prototype;
// Object.setPrototypeOf(Child.prototype,Parent.prototype);
// let child = new Child();
// child.eat()
// console.log(child.name);
//继承公有属性2 
// Child.prototype = Object.create(Parent.prototype);


function  create(parentPrototype){
 function Fn(){}
 Fn.prototype = parentPrototype;
 return new Fn();

}
Child.prototype = create(Parent.prototype);
let child = new Child();
console.log(child.constructor);