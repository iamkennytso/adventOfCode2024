const fs = require('fs').promises;

const deltas = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
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
      for (let [deltaX, deltaY] of deltas) {
        const Mx = x + deltaX
        const My = y + deltaY
        if (inRange(Mx, My) && grid[Mx][My] === 'M') {
          const Ax = Mx + deltaX
          const Ay = My + deltaY
          if (inRange(Ax, Ay) && grid[Ax][Ay] === 'A') {
            const Sx = Ax + deltaX
            const Sy = Ay + deltaY
            if (inRange(Sx, Sy) && grid[Sx][Sy] === 'S') {
              ans++
            }
          }
        }
      }
    }

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        const char = grid[i][j]
        if (char === 'X') {
          lookForAns(i,j)
        }
      }
    }

    console.log(ans)
  } catch (err) {
    console.error(err)
  }
})();