// promise 类 静态方法（promise.xx） 原型方法

// promise.all
// promise.resolve
// promise.reject
// promise.rase
// (then catch finally)
//exector 执行器 它的类型是一个函数。里面有俩参数，都是函数
// peading  resolve reject  状态
// 解决异步问题，解决callback 也是基于callback
// 每一个promise都有一个实例方法 then()

// let Promise = require('./promise');
// let p = new Promise(function(resolve,reject){
//   reject('失败');
//   resolve('成功');

// });
// p.then((value)=>{
//   console.log('sucess',value);
// },(reason)=>{
//   console.log('err',reason);
// });
// console.log('end');

let Promise = require('./promise');

let p = new Promise(function(resolve,reject){
 
  setTimeout(()=>{
    resolve('成功');
  },1000);
  // reject('失败');

});
p.then((value)=>{
  console.log('sucess',value);
},(reason)=>{
  console.log('err',reason);
});
