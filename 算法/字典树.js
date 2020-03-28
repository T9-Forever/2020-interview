
// doubleArray
const DupArray = function(n, m){
  let arr = new Array(n);
  for(let i = 0; i < arr.length; i += 1) {
    // console.log('233');
    arr[i] = new Array(m);
  }
  return arr;
}

class Trie {
  constructor() {
    this.tree = DupArray(Trie.MAXN, 27); // tree[i][j] 编号为i的节点 第j个元素 的编号为  tree[i][j]
    this.fagged = DupArray(Trie.MAXN, 27);
    this.sum = 0;
    this.tot = 0;
  }
  insert(str) {
    let len = str.length;
    let root = 0;
    let isNew = false;
    const {
      tree,
      fagged,
    } = this;
    for(let i = 0; i < len; i += 1){
      const id = str.charCodeAt(i) - 96;
      if(!tree[root][id]) {
        tree[root][id] = ++this.tot;
        isNew = true;
      }
      root = tree[root][id];
    }
    if(isNew) {
      // leetcode 820 需要 len + 1, 正常 len
      this.sum += len + 1;
    }
    fagged[root] = true;
  }
  query(str) {
    if(!str) {
      return false;
    }
    let len = str.length;
    let root = 0;
    const {
      tree,
      fagged,
    } = this;
    for(let i = 0; i < len; i += 1){
      const id = str.charCodeAt(i) - 96;
      if(!tree[root][id]) {
        return false;
      }
      root = tree[root][id];
    }
    return !!fagged[root];
  }
}
Trie.MAXN = 2000*7+100;
