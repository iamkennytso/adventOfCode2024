const fs = require('fs').promises;

const deltas = [
  [1,1],
  [-1, -1],
  [-1, 1],
  [1, -1]
];

(async () => {
  try {
    const data = await fs.readFile('04a.txt', 'utf8');
    const grid = data.replaceAll('\r', '').split('\n').map(line => line.split(''))
    let ans = 0

    const inRange = (x, y) => {
      return grid[x] && grid[x][y] !== undefined
    }

    const lookForAns = (x, y) => {
      const obj = {
        M: 2,
        S: 2
      }
      for (let [deltaX, deltaY] of deltas) {
        const newX = x + deltaX
        const newY = y + deltaY
        if (inRange(newX, newY)) {
          const char = grid[newX][newY]
          if (char in obj) {
            obj[char]--
          }
        }
      }
      if (Object.values(obj).every(val => val === 0) && grid[x+1][y+1] !== grid[x-1][y-1]) ans++
    }

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        const char = grid[i][j]
        if (char === 'A') {
          lookForAns(i,j)
        }
      }
    }

    console.log(ans)
  } catch (err) {
    console.error(err)
  }
})();