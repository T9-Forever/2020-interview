const arr = [
  {
    id: 1, children: [
      {id:11}, 
      {id:12}
    ],
  },
  {
    id: 2, children: [
      {id: 21},
      {id: 22, children: [{id:221}, {id:222}]}
    ]
  }
];

// dfs

const find = (arr, targetId, parentRoot = null)=> {
  let targetRoot = null;
  for(let i = 0; i < arr.length; i += 1) {
    arr[i].parent = parentRoot;
    if(targetRoot) {
      break;
    }
    if(arr[i].id === targetId) {
      targetRoot = arr[i];
    }else if(arr[i].children){
      targetRoot = find(arr[i].children, targetId, arr[i]);
    }
  }
  return targetRoot;
}

const findResult = (arr, targetId)=> {
  let targetRoot = find(arr, targetId);
  let result = [];
  do{
    result.push(targetRoot.id);
    targetRoot = targetRoot.parent;
  }while(targetRoot)
  return result.reverse();
}

let fg = findResult(arr, 222);

// bfs

const bfsFind = (arr, targetId) => {
  // 队列
  let queue = [];
  let targetRoot = null;
  // inital queue
  for(let i = 0; i < arr.length; i += 1) {
    arr[i].parent = null;
    queue.push(arr[i]);
  }
  do{
    let firstItem = queue.shift();
    if(firstItem.id === targetId) {
      targetRoot = firstItem;
      break;
    }else if(firstItem.children && Array.isArray(firstItem.children)){
      for(let i = 0; i < firstItem.children.length; i += 1) {
        firstItem.children[i].parent = firstItem;
        queue.push(firstItem.children[i]);
      }
    }
  }while(queue && queue.length)

  let result = [];
  do{
    result.push(targetRoot.id);
    targetRoot = targetRoot.parent;
  }while(targetRoot)
  return result.reverse();
}

let fg1 = bfsFind(arr, 222);
console.log(fg1);