


function _classCallCheck(instance,constructor){//类的调用检测  检测类是不是new 出来的
  if(!(instance instanceof constructor)){
    throw new Error('123');
    
  }
}
// constructor 是构造函数
// protoPrototypes 是原形方法的描述
// staticPrototypes 是静态方法描述
function _creatClass(constructor,protoPrototypes,staticPrototypes){
  if(protoPrototypes.length>0){
    definePrototypes(constructor.prototype,protoPrototypes); 
    //公共的需要定义在原型上
  }
  if(staticPrototypes.length >0 ){
    definePrototypes(constructor,staticPrototypes);
    //非公共的需要定义在类上
  }
}
function definePrototypes(target,arr){ //循环定义
  for(let i =0;i<arr.length;i++){
    Object.defineProperty(target,arr[i].key,{
      ...arr[i],
      enumerable:true,
      configurable:true,
      writable:true
    });
  }
}
let Parent = function(){
  function P(){
    _classCallCheck(this,P); //如果this是P的实例 说明是new出来的
    this.name = 'parent--name';
    return {}
  }
  _creatClass(P,
    [
     {
       key:'eat',
       value:function(){
       console.log('eat');
     }
    }
  ],[
    {
      key:'b',
      value:function(){
        return 2;
      }
    }
  ]);
  return P;
}()
let parent = new Parent()
// parent.eat();
function _inherits(subClass,superClass){
  //继承公有属性
  subClass.prototype = Object.create(superClass.prototype,{constructor:{
    value:subClass
  }});
  //继承静态方法
  Object.setPrototypeOf(subClass,superClass);
}
// 类的继承
let Child = (function(Parent){
  //先实现继承父类的公有属性和静态方法
  _inherits(C,Parent);
  function C(){
    _classCallCheck(this,C);
    let obj = Parent.call(this);
    let that = this;
    if(typeof obj === 'object'){
      that = obj;
    }
    that.age = 9; // 解决父类返回空对象的问题
    return that;
  }
  return C
})(Parent)
let child = new Child();
// console.log(child.name);
console.log(Child.b());
