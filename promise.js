// 手写简易promise
function Promise(executor){
  let self = this;
  self.status = 'pending';
  self.value = undefined;
  self.reason = undefined;
  self.onFulfilledCallbacks = [];
  self.onRejectedCallbacks = [];
  function resolve(value){
    if(self.status === 'pending'){
      self.status = 'resolve';
      self.value = value;
      self.onFulfilledCallbacks.forEach(fn=>fn());
    }
  }
  function reject(reason){
    if(self.status === 'pending'){
      self.status = 'reject'
      self.reason = reason;
      self.onRejectedCallbacks.forEach(fn=>fn());
    }
  }
  executor(resolve,reject);
}
Promise.prototype.then = function(onfulfilled,onRejected){
  let self = this;
  if(self.status === 'resolve'){
    onfulfilled(self.value)
  }
  if(self.status === 'reject'){
    onRejected(self.reason);
  }
  if(self.status === 'pending'){
    console.log('pending');
    self.onFulfilledCallbacks.push(function(){
      onfulfilled(self.value)
    });
    self.onRejectedCallbacks.push(()=>{
      onRejected(self.reason);
    });
  }
  
};
let promise2 = new Promise(function(resolve,reject){
  let x= onfulfilled(self.value);
  resolvePromise(promise2,x,resolve,reject)
})
module.exports = Promise;