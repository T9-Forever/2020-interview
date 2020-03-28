var isBalanced = function(root) {
  let balanced = true;
  function getHeight(root) {
      if(!root) return 0;
      let leftHeight = getHeight(root.left);
      let rightHeight = getHeight(root.right);
      console.log(leftHeight, rightHeight, '____ok', root.val);
      if(Math.abs(leftHeight - rightHeight) > 1) {
          balanced = false;
      }
      return Math.max(leftHeight, rightHeight) + 1;
  }
  getHeight(root);
  return balanced;
};


// leetcodde 110 平衡二叉树
// 构造测试
const arr = [1,null,2,3];

let root1 = {
  val: 3,
  left: null,
  right: null
};

let root2 = {
  val: 1,
  left: null,
  right: null
};

let root3 = {
  val: 2,
  left: null,
  right: null
};

root1.left = root2;
root1.right = root3;


var preorderTraversal = function(root) {
  if(!root) return [];

  let result = [];

  let queue = [];
  queue.push(root);
  do{
      let firstNode = queue.shift();
      result.push(firstNode.val);
      if(firstNode.left) {
          queue.unshift(firstNode.left);
      }
      if(firstNode.right) {
          queue.unshift(firstNode.right);
      }
  }while(queue && queue.length)

  return result;
}

const fg = preorderTraversal(root1)
console.log(fg, '___fg');

// 0 left 1 right 2
// 1 left 3 right 4
// 2 left 5 right 6
// 3 left 7 right 8