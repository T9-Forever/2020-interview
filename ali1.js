// 题目：实现一个函数，比较两个版本号的大小。返回 1（大于）/0（等于）/-1（小于）
function compareVer(ver1, ver2) {
  // 代码写在这里↓↓↓↓↓
  const arr1 = ver1.split('.');
  const arr2 = ver2.split('.');
  function func(a, b) {
    if(parseInt(a) > parseInt(b)) {
      return 1;
    }else if(parseInt(a) < parseInt(b)) {
      return -1;
    }
    return 0;
  }
  let fg = 0;
  fg = func(arr1[0], arr2[0]);
  if(fg) {
    return fg;
  }
  fg = func(arr1[1], arr2[1]);
  if(fg) {
    return fg;
  }
  fg = func(arr1[2], arr2[2]);
  return fg;
 	
  // 代码写在这里↑↑↑↑↑
}
console.log(compareVer("1.0.20", "1.1.0")); // "-1"


// ====================
// 题目：实现一个函数，将内联样式中的 px 单位(忽略大小写)改为 rem，并将数值除以 100
function px2rem(cssText) {
  // 代码写在这里↓↓↓↓↓
  const str = cssText.toLowerCase();
  const reg = /\d+px/g;
  const newStr = str.replace(reg, (...arg)=> {
    const px$ = arg[0].slice(0, -2);
    const rem = `${(px$ || 0)/100}rem`;
    // console.log(rem, '___rem');
    return rem;
  });
  console.log(newStr);
  return newStr;
  // 代码写在这里↑↑↑↑↑
}
console.log(px2rem("width: 100px; border: 5PX solid red")); // "width: 1rem; border: 0.05rem solid red"


// ====================
// 题目：扩展 console.log 方法，调用后打印的这条日志开头加上 当前时间(时间格式不限)
// 代码写在这里↓↓↓↓↓
const meLog = (fn)=> (...arg)=> {
  const date = new Date();
  const str = arg.join(' ');
  return fn(`${date.toLocaleDateString()} ${date.toLocaleTimeString()} - ${str}`);
  
}
console.log = meLog(console.log)
// 代码写在这里↑↑↑↑↑
console.log("hello", "world"); // 输出 "2020/3/14 上午11:25:43 - hello world"


// ====================
// 题目：为字符串增加 reverse() 方法，调用后将自己倒序排列
// 代码写在这里↓↓↓↓↓
let fn = function() {
  let self = this;
  let arr = self.split('');
  return arr.reverse().join('');
}
String.prototype.reverse = fn;
// 代码写在这里↑↑↑↑↑
var str = "123";
console.log(str.reverse()); // "321"


// ====================
// 题目：有一个数组，里面只存在 * 和 字母，如 ['*', 'd', 'c', '*', 'e']。
// 实现一个函数把这个数组中的所有星号移动到左边，所有的字母移动到右边，所有字母的顺序不能改变。
var arr = ['*', 'd', 'c', '*', 'e'];
function move(array) {
 // 代码写在这里↓↓↓↓↓
  let str = array.join('');
  const arr$ = str.split('*');
  const number = arr$.length - 1;
  let newArray = ('*'.repeat(number) + arr$.join('')).split('');
  arr.splice(0);
  array.push(...newArray);
 // 代码写在这里↑↑↑↑↑
}
move(arr);
console.log(arr); // ['*', '*', 'd', 'c', 'e']


// ====================
// 题目：实现一个函数，效果同 document.getElementById（通过遍历 node.childNodes 和 node.id 属性实现）
function getElementById(findId) {
 // 代码写在这里↓↓↓↓↓
  // const nodeList = document.childNodes;
  let findNode = null;
  let fg = false;
  function dfs(root) {
    if(fg) return; 
    const nodeList = root.childNodes;
    for(let item of nodeList) {
      if(item.id === findId) {
        fg = true;
        findNode = item;
        return;
      }else if(item.nodeType === 1 && item) {
        dfs(item);
      }
    } 
  }
  dfs(document.body);
  return findNode;
 // 代码写在这里↑↑↑↑↑
}