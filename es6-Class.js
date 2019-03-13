class Parent{
  constructor(){
    this.name = 'parent'
    this.age = '11'
    // return {a:1} return {}
  }
  smoking(){
    console.log('smoking');
  }
  static c(){
    console.log('cccc');
  }
}
let parent  = new Parent();
// console.log(Parent.c());
class Child extends Parent{ 
  // 1类只能new  
  //  2 继承公有和私有 也能继承静态方法
  // 3父类的函数中返回了一个引用类型，会把这个引用类型作为子类的this
  constructor(){
    super();
    this.name = 'class' // 私有属性
  }
  eat(){
    console.log('eat')    //原型上的方法
  }
static a(){ //类上的方法
  return 1;
}
static b(){ //类上的方法
  return 2;
}
}
let child = new Child();
// child.smoking();
// console.log(Child.c());
console.log(child.smoking());
Child.c()

// class Child{ //类只能new 
//   constructor(){
//     this.name = 'class' // 私有属性
//   }x
//   eat(){
//     console.log('eat')    //原型上的方法
//   }
// static a(){ //类上的方法
//   return 1;
// }
// static b(){ //类上的方法
//   return 2;
// }
// }
// let child = new Child();
// console.log(Child.a());   // 类上的方法 只有类才能调用
// console.log(Child.b());
// es6只支持静态方法，没有静态属性

