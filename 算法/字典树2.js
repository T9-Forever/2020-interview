class Trie {
  constructor() {
    this.sum = 0;
    this.root = new TrieNode('');
  }
  insert(str) {
    let cur = this.root;
    let isNew = false;
    for(let i = 0; i < str.length; i += 1) {
        let id = str.charCodeAt(i) - 97;
        if(!cur.children[id]) {
          cur.children[id] = new TrieNode(str[i]);
          isNew = true;
        }
        cur = cur.children[id];
    }
    if(isNew) {
      // leetcode 820 需要 len + 1, 正常 len
      this.sum += str.length + 1;
    }
    cur.isWord = true;
  }
  query(str) {
    let cur = this.root;
    for(let i = 0; i < str.length; i += 1) {
      let id = str.charCodeAt(i) - 97;
      if(!cur.children[id]) {
        return false;
      }
      cur = cur.children[id];
    }
    return cur.isWord
  }
}

class TrieNode {
  constructor(val) {
    this.val = val;
    this.isWord = false;
    this.children = Array(27); // this.children = new TrieNode[26]; java
  } 
}