const fs = require('fs').promises;

const deltas = [
  [1,0],
  [-1,0],
  [0,1],
  [0,-1]
]

const inRange = (x, y, grid) => {
  return grid[x] && grid[x][y] !== undefined
}

const traverse = (x, y, cur, grid, seen) => {
  if (cur === 9 && !seen.has(`${x},${y}`))  {
    seen.add(`${x},${y}`)
    return 1
  }
  const next = cur + 1
  let valids = 0
  deltas.forEach(([dx,dy]) => {
    const newX = x + dx
    const newY = y + dy
    if (inRange(newX, newY, grid) && grid[newX][newY] === next) {
      valids += traverse(newX, newY, next, grid, seen)
    }
  })
  return valids
}

(async () => {
  try {
    const data = await fs.readFile('10a.txt', 'utf8')
    const grid = data.replaceAll('\r', '').split('\n')
      .map(line => line.split(''))
      .map(numLine => numLine.map(num => Number(num)))

    let ans = 0
    const trailheads = []
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === 0) {
          trailheads.push([i,j])
        }
      }
    }

    for (let trailhead of trailheads) {
      const [x, y] = trailhead
      const sum = traverse(x, y, 0, grid, new Set())
      ans += sum
    }

    console.log(ans)
  } catch (err) {
    console.error(err)
  }
})();