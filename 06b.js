const fs = require('fs').promises;

const UP = 'up'
const RIGHT = 'right'
const DOWN = 'down'
const LEFT = 'left'

const goStraight = {
  [UP]: [-1, 0],
  [RIGHT]: [0, 1],
  [DOWN]: [1, 0],
  [LEFT]: [0, -1],
}

const turnRight = {
  [UP]: RIGHT,
  [RIGHT]: DOWN,
  [DOWN]: LEFT,
  [LEFT]: UP,
};

(async () => {
  try {
    const data = await fs.readFile('06a.txt', 'utf8');
    const grid = data.replaceAll('\r', '').split('\n').map(line => line.split(''))
    let start

    let ans = 0
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === '^') {
          start = [i, j]
        }
      }
    }

    const isInBound = (x, y) => {
      return grid[x] && grid[x][y] !== undefined
    }

    const trial = (grid, startX, startY) => {
      let cur = [startX, startY]
      const seen = new Set()
      let dir = UP
      while (isInBound(cur[0], cur[1])) {
        if (seen.has(`${cur[0]},${cur[1]},${dir}`)) {
          ans++
          return
        }
        seen.add(`${cur[0]},${cur[1]},${dir}`)
        const nextX = cur[0] + goStraight[dir][0]
        const nextY = cur[1] + goStraight[dir][1]
        if (!isInBound(nextX, nextY)) {
          return
        }
        if (grid[nextX][nextY] === '#') {
          dir = turnRight[dir]
        } else {
          cur = [nextX, nextY]
        }
      }
    }

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === '.') {
          const newGrid = grid.map(line => [...line])
          newGrid[i][j] = '#'
          trial(newGrid, start[0], start[1])
        }
      }
    }

    console.log(ans)
  } catch (err) {
    console.error(err)
  }
})();