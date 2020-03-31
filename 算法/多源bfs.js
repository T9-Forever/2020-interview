/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  let queue = [];
  for(let i = 0; i < grid.length; i += 1) {
      for(let j = 0; j < grid.length; j += 1) {
          if(grid[i][j] === 1) {
              queue.push({
                  x: i,
                  y: j
              });
          }
      }
  }
  let move = [[1,0], [-1,0], [0, 1], [0, -1]];
  let lastPoint = null;
  let hasOcean = false;
  while(queue.length){
      lastPoint = queue.shift();
      for(let i = 0;i < 4 ; i += 1) {
          let nx = lastPoint.x + move[i][0];
          let ny = lastPoint.y + move[i][1];
          if(nx < 0 || ny < 0 
              || nx >=grid.length || ny>= grid.length 
              || grid[nx][ny] !== 0) {
              continue;
          }
          hasOcean = true;
          grid[nx][ny] = grid[lastPoint.x][lastPoint.y] + 1;
          queue.push({x: nx, y:ny});
      }
  }
  if(lastPoint === null || !hasOcean) {
      return -1;
  }
  return grid[lastPoint.x][lastPoint.y] - 1;
};

let arr = [[1,0,0],[0,0,0],[0,0,0]];
const fg = maxDistance(arr);
console.log(fg, '____fg');