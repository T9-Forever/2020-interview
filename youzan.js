
// 将一天24小时按每半小划分成48段，我们用一个位图表示选中的时间区间，
// 例如`110000000000000000000000000000000000000000000000`，
// 表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，
// 也就是对应00:00~01:00这个时间区间。一个位图中可能有多个不连续的时间区间被选中，
// 例如`110010000000000000000000000000000000000000000000`，
// 表示00:00-1:00和02:00-02:30这两个时间区间被选中了。

// 要求：写一个函数timeBitmapToRanges，将上述规则描述的时间位图转换成一个选中时间区间的数组。
// 示例输入：`"110010000000000000000000000000000000000000000000"`
// 示例输出：`["00:00~01:00", "02:00~02:30"]`

// 实现一个函数timeRangesToBitmap将题1的输出转换成题1的输入，
// 也就是实现一个timeBitmapToRanges的逆操作函数。

// 示例输入：`["00:00~01:00", "02:00~02:30"]`
// 示例输出：`"110010000000000000000000000000000000000000000000"`


const rangesToTimeBitmap = (range)=> {
  // let range = [...range1];
  let arr = [];
  range.forEach((item)=> {
      let str$1 = item.split('~');
      let str$a1 = str$1[0].split(':')[0];
      // console.log(item, '__item')
      let str$a2 = str$1[0].split(':')[1];

      let str$b1 = str$1[1].split(':')[0];
      let str$b2 = str$1[1].split(':')[1];

      let num1 = Number(str$a1) * 60 + Number(str$a2);
      let num2 = Number(str$b1) * 60 + Number(str$b2);

      let index1 = num1 / 30;
      let index2 = num2 / 30;
      arr.push({
          start: index1,
          end: index2
      });
  });

  // console.log(arr, '___arr');
  // 初始化
  let result = '0'.repeat(48);
  let resultArr = result.split('');
  // 上一个有1
  // let lastIndexHas1 = -1;
  for(let i = 0; i < arr.length ;i += 1) {
      let s = arr[i].start;
      let e = arr[i].end;
      for(let j = s; j <= e; j += 1) {
          resultArr[j] = '1';
      }
  }
  return resultArr.join('');
  // return s;
}

let range = ["00:00~01:00", "02:00~02:30"];

let s = rangesToTimeBitmap(range);
console.log(s);

const timeBitmapToRanges = (str)=> {
//   let str = '110010000000000000000000000000000000000000000000';
let hasStart = -1;
//let endStart = -1;
const result = [];
for(let i = 0; i < 48; i += 1) {
  if(str[i] === '1' && hasStart === -1) {
    hasStart = i;
  }else if(str[i] === '1' && hasStart !== -1) {
    continue;
  }else if(str[i] === '0' && hasStart !== -1) {
    result.push({
      start: hasStart,
      end: i
    });
    hasStart = -1;
  }else if(str[i] === '0' && hasStart === -1) {
      continue;
  }
}
// 末尾1
if(hasStart !== -1) {
    result.push({
        start: hasStart,
        end: 47
    });
}

  // 0 00:00 0
  // 1 00:30 30
  // 2 01:00 60
  // 3 01:30 90
  // 4 02: 00
  // ...
  // 47 23:30
  let showArr = [];
  for(let i = 0; i < 48 ; i += 1) {
      let first = parseInt(i / 2) + '';
      if(first.length === 1) {
          first = '0' +first
      }
      let has30 = i % 2 ? '30' : '00';
      showArr[i] = `${first}:${has30}`;
  }

  const meResult = result.map((item)=> {
      let s = showArr[item.start];
      let e = showArr[item.end];
      return `${s}~${e}`;
  })
  // console.log(meResult, '____meResult');
  return meResult;
}

// let str = '110010000000000000000000000001100000000000000000';
// let res = timeBitmapToRanges(str);

// cconsole.log(res);
