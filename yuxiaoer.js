/**
 * 1. 给定一个数组，把里面所有的奇数求和
 */  

const arr = ['1', '2', '3', 6, 4, -99, -101];

const res = arr.reduce((prev, cur)=> {
  if(parseInt(cur)%2 !== 0) {
    return prev + parseInt(cur);
  }else return prev
}, 0);

console.log(res);  

/**
 * 2. 完成bindRight实现函数参数的部分绑定功能
 */  

function bindRight(fn, ...arg1) {
  if(typeof fn !== 'function') {
    throw new Error();
  }
  return (...arg2)=> {
    console.log(...arg1, ...arg2);
    return fn.call(null, ...arg2, ...arg1);
  }
}

let fn1 = (a, b, c, d) => a - b * c + d;
let fn2 = bindRight(fn1, 3, 4);
console.log(fn2(1, 2));


/**
 * 3. 写出冒泡（或选择）排序算法对int数组的所有正整数进行从小到大排序，暂停1s后，再对所有的正整数进行从大到小排序，然后输出最终排序结果。
 * 要求：
 * 每次交换后暂停1s，非正整数的数字对应的位置保持不变
 * 不要用async/await
 * 考虑代码的可读性，及代码复用
 */  

const arr1 = [11, -1, 6, 5, -4, -7, 9, 8];
const sort = (arr , desc = false)=> {
  // arr$
  const arr$ = arr.map((item, idx) => item > 0 ? idx : null).filter(item => item !== null);

  for(let i = 0; i < arr$.length; i += 1) {
    for(let j = 0; j < arr$.length - i - 1 ; j += 1) {
        const curIdx = arr$[j];
        const nextIdx = arr$[j+1];
        if(desc && arr[curIdx] < arr[nextIdx]) { // 降序
          arr[nextIdx] += arr[curIdx];
          arr[curIdx] = arr[nextIdx] - arr[curIdx];
          arr[nextIdx] -= arr[curIdx];
        }else if (!desc && arr[curIdx] > arr[nextIdx]) { // 升序
          arr[nextIdx] += arr[curIdx];
          arr[curIdx] = arr[nextIdx] - arr[curIdx];
          arr[nextIdx] -= arr[curIdx];
        }
    }
  }
  return arr;
}


const task = ()=> {
  const desc = task.desc || false;
  setTimeout(()=> {
    console.log(sort(arr1, desc));
    task.desc = !task.desc;
    task();
  }, 1000);
}

// task();

const task1 = ()=> {
  task1.desc = false;
  while(true) {
    console.log(sort(arr1, task1.desc));
    const cur = +new Date();
    while(+new Date() - cur <= 1000); // sleep(1000);
    task1.desc = !task1.desc;
  }
}

task1();