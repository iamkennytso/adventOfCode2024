const { permission } = require('process');

const fs = require('fs').promises;

const deltas = [
  [0,1],
  [0,-1],
  [1,0],
  [-1,0]
];

(async () => {
  try {
    const data = await fs.readFile('12a.txt', 'utf8')
    const grid = data.replaceAll('\r', '').split('\n').map(line => line.split(''))
    const seen = new Set()
    const roots = {}

    const inBounds = (x, y) => {
      return grid[x] && grid[x][y] !== undefined
    }

    const traverse = (x, y, val, root) => {
      if (!(root in roots)) {
        roots[root] = {area: 0, perimeter: 0}
      }
      const str = `${x},${y}`
      seen.add(str)
      roots[root].area++
      deltas.forEach(delta => {
        const newX = x + delta[0]
        const newY = y + delta[1]
        if (inBounds(newX, newY) && grid[newX][newY] === val && !seen.has(`${newX},${newY}`)) {
          traverse(newX, newY, val, root)
        } else if (!inBounds(newX, newY) || grid[newX][newY] !== val) {
          roots[root].perimeter++
        }
      })
    }

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        const str = `${i},${j}`
        if (!seen.has(str)) {
          traverse(i, j, grid[i][j], str)
        }
      }
    }
    let ans = 0
    for (let plot of Object.values(roots)) {
      const {area, perimeter} = plot
      ans += (area * perimeter)
    }
    console.log(ans)
  } catch (err) {
    console.error(err)
  }
})();