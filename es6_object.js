// 被取缔
Object.assign();  //es7草案 也是浅拷贝

var name = {
  name:'zgl'
}
var age = {
  age:'13'
};
console.log({...name,...age});
console.log(Object.assign(name,age));

// __proto__ 链 每个都有链

let obj1 = {
  name:'agl'
}
let obj2 = {
  age:'12'
}
Object.setPrototypeOf(obj1,obj2)
Object.getPrototypeOf(obj1);
console.log(Object.getPrototypeOf(obj1));
console.log(obj1.name);
obj1.__proto__ = obj2;


let obj1={
  name: 'zgl',
  age:'18'
}
let obj2 = {
  name:'zxs',
  age:'16',
  getName(){
   return super.name
  },
  __proto__:obj1,
}
console.log(obj2.getName());