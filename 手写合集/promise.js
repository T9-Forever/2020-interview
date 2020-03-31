Promise.all = (arg) => {
  return new Promise((resolve, reject)=> {
    const res = [];
    let hasSovled = 0;
    const resolveAll = ()=> {
      resolve(res);
    };
    const resolveSingle = (idx)=> (data)=> {
      console.log(data,' ___会不会阻塞');
      res[idx] = data;
      hasSovled++;
      if(hasSovled === arg.length) {
          resolveAll();
      }
    };
    const rejectSingle = (error)=> {
      reject(error);
    };
    arg.forEach((item, idx) => {
      item.then(resolveSingle(idx)).catch(rejectSingle);
    });
    
  });
}


Promise.all1 = async(arg)=> {
  const res = [];
  for await (let item of arg) {
    res.push(item);
  }
  return res;
}

let promise1 = new Promise((resolve)=> {
  setTimeout(()=> {
    console.log('完成1');
    resolve('1');
  }, 2000)
});

let promise2 = new Promise((resolve)=> {
  setTimeout(()=> {
    console.log('完成2');
    resolve('2');
  }, 1000)
});

Promise.all([promise1, promise2]).then((res)=> {
  console.log(res, '___res返回结果');
}).catch((e)=> {
  console.log('捕获错误', e);
});