/**
 * 假设有这样一个需求： 红灯3s亮一次，绿灯1s亮一次，黄灯2s亮一次，如何让三个灯不断交替重复亮灯？
 * 三个亮灯函数已经存在：
 */   

function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
} 

// 异步任务的阻塞  
function task (fn, delay){
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      fn();
      resolve();
    }, delay);
  });
}

let step = async ()=> {
  await task(red, 3000);
  await task(green, 1000);
  await task(yellow, 2000);
  step();
}

step();