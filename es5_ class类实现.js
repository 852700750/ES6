// calss类的实现
function definePrototypes(target,arr){
  for(let i =0;i<arr.length;i++){
    Object.defineProperty(target,arr[i].key,{
      ...arr[i],
      configurable:true,
      enumerable:true,
      writable:true
    });
  }
}
function _creatClass(constructor,protoPrototypes,staticPrototypes){
  if(protoPrototypes.length>0){
    definePrototypes(constructor.prototype,protoPrototypes)
  }
  if(staticPrototypes.length>0){
    definePrototypes(constructor,staticPrototypes);
  }
}
function _classCallCheck(instance,constructor){
  if(!(instance instanceof constructor)){
    throw new Error('实例不是new出来的');
  }
}
let Parent = function(){
  function P(){
    _classCallCheck(this,P);
    this.name = 'parent name'
    return {}
  }
  _creatClass(P,[
    {
      key:"eat",
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
let parent = new Parent();
// parent.eat()
function _inherits(subClass,superClass){
  //继承公有
  subClass.prototype = Object.create(superClass.prototype);
  //继承静态
  Object.setPrototypeOf(subClass,superClass);
}
let Child = (function(Parent){
  //继承公有属性和静态方法
  _inherits(C,Parent);
  function C(){
    _classCallCheck(this,C);
    let obj = Parent.call(this);
    let that = this;
    if(typeof obj === 'object'){
      that = obj;
    }
    that.age = 9;
    return that;
  }
  return C;
})(Parent)
let child = new Child();
console.log(Child.b())
console.log(child);
// console.log(child.eat());

