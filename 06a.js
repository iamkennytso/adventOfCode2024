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
    let cur
    let dir = UP
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === '^') {
          cur = [i, j]
        }
      }
    }
    const seen = new Set()

    const isInBound = (x, y) => {
      return grid[x] && grid[x][y] !== undefined
    }

    while (isInBound(cur[0], cur[1])) {
      seen.add(`${cur[0]},${cur[1]}`)
      const nextX = cur[0] + goStraight[dir][0]
      const nextY = cur[1] + goStraight[dir][1]
      if (!isInBound(nextX, nextY)) {
        break
      }
      if (grid[nextX][nextY] === '#') {
        dir = turnRight[dir]
      } else {
        cur = [nextX, nextY]
      }
    }

    console.log(seen.size)
  } catch (err) {
    console.error(err)
  }
})();