// 观察者模式  观察者（被观察者）
//要提供一个更新的方法，当被观察者的数据发生变化时，须执行观察者的updata方法

function Observer(){
  this.state = '';
  this.arr = [];
}
Observer.prototype.attach = function(s) {
  console.log(s,'s');
  this.arr.push(s);
}
Observer.prototype.setState = function(newState)  {
  this.state = newState;
  this.arr.forEach(s => {
    s.updata(newState);
  });
}
function Subject(name,target){
  this.name = name;
  this.target = target;
}
Subject.prototype.updata = function(newState) {
  console.log(this.name + '观察到了'+ newState);
}
let o = new Observer();
let s1 = new Subject('我',o);
let s2 = new Subject('你',o);
o.attach(s1);
o.attach(s2);
o.setState('=开不开心');
o.setState('饿不饿');