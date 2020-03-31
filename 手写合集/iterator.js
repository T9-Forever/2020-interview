function meIterator(arr) {
  let curIdx = 0;
  return {
    next : ()=> {
      if(curIdx < arr.length) {
        return {
          value: arr[curIdx++],
          done: false
        }
      }else {
        return {
          value: undefined,
          done: true
        }
      }
    }
  }
}

// let arr = [];
// let it = meIterator(arr);

let obj = {
  name: 'linjian',
  [Symbol.iterator] : function() {
    let curIdx = 0;
    return {
      next : ()=> {
        if(curIdx < this.length) {
          return {
            value: this[curIdx++],
            done: false
          }
        }else {
          return {
            value: undefined,
            done: true
          }
        }
      }
    }
  },
  length: 2,
  0: '200',
  1: '3000'
};

for(let i of obj) {
  console.log(i);
}
