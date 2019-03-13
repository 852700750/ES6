//reduce 求和
let ary = [1,5,6,8];
let total = ary.reduce((prev,next,index,ary)=>{
  return prev+next;
});
console.log(total);
//二维数组转换为一维数组
let ary = [[1,2,3],[4,5,6]];
let flat = ary.reduce((prev,next)=>{
  return [...prev,...next]
});
console.log(flat);

// 将多维数组转化为一维数组
let ary =[1,[2,3],[6,7,[8,9,[10,11],5]]];
console.log(ary,'=======>00000');
let newAry = function(ary){
  console.log(ary);
  return ary.reduce((prev,next)=>
      prev.concat(Array.isArray(next)?newAry(next):next),[]);
}
console.log(newAry(ary));


let ary = [1,5,6,8];

Array.prototype.myForEach = function(fn){
  for(var i=0;i<this.length;i++){
    fn(this[i],i);
  }
};

[1,5,6,8].myForEach((item,index)=>{
console.log(item,index);
});

// map 有返回值，返回值是一个新数组 
Array.prototype.myMap=function(fn){
  let arr = [];
  for(let i=0;i<this.length;i++){
    arr.push(fn(this[i],i));
  }
  return arr;
};
let newAry=[1,2,3].myMap((item,index)=>{
  return item*2
});
console.log(newAry);


// filter  返回true表示留下  false表示删除
let filterAry = [1,2,3].filter((item,index)=>{
  return item >2
});
console.log(filterAry);

// find 查找 返回查找的那一项，找到就不继续往下找了
let findAry = [1,2,3].find((item,index)=>{
  console.log(item);
  return item<2
});
console.log(findAry);

// some 找到后返回true
let newAry = [1,2,3].some((item,index)=>{
  console.log(item);
  return item<3
});
console.log(newAry);
//every  返回false
let newAry = [1,2,3].some((item,index)=>{
  console.log(item);
  return item>1
});
console.log(newAry);

// includes 是否包含
console.log([1,2,3].includes(4));


//将类数组转化为数组
function total(){
  console.log(arguments);
  console.log(eval(Array.from(arguments).join('+')))
}
total(1,2,3);

// 常见的类数组

of
