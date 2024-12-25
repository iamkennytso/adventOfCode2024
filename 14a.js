const fs = require('fs').promises;

const X_LENGTH = 103;
const Y_LENGTH = 101;
const STEPS = 100;

(async () => {
  try {
    const data = await fs.readFile('14a.txt', 'utf8')
    const robots = data.replaceAll('\r', '').split('\n').map(robotLine => {
      const [start, velo] = robotLine.split(' ')
      const [, startCoords] = start.split('=')
      const [curY, curX] = startCoords.split(',').map(num => Number(num))
      const [, veloCoords] = velo.split('=')
      const [veloY, veloX] = veloCoords.split(',').map(num => Number(num))
      return {curX, curY, veloX, veloY}
    })

    const grid = []

    for (let i = 0; i < X_LENGTH; i++) {
      grid[i] = []
      for (let j = 0; j < Y_LENGTH; j++) {
        grid[i][j] = '0'
      }
    }

    for (let robot of robots) {
      for (let i = 1; i <= STEPS; i++) {
        const { curX, curY, veloX, veloY } = robot
        let nextX = curX + veloX 
        let nextY = curY + veloY
        if (nextX >= X_LENGTH) {
          nextX = nextX % X_LENGTH
        } else if (nextX < 0) {
          nextX = X_LENGTH + nextX
        }
        if (nextY >= Y_LENGTH) {
          nextY = nextY % Y_LENGTH
        } else if (nextY < 0) {
          nextY = Y_LENGTH + nextY
        }
        robot.curX = nextX
        robot.curY = nextY
      }
    }

    const quads = [0, 0, 0, 0]
    const X_MID = Math.floor(X_LENGTH / 2)
    const Y_MID = Math.floor(Y_LENGTH / 2)
    for (let robot of robots) {
      const {curX, curY} = robot
      if (curX > X_MID && curY > Y_MID) {
        quads[0]++
      }
      if (curX > X_MID && curY < Y_MID) {
        quads[1]++
      }
      if (curX < X_MID && curY > Y_MID) {
        quads[2]++
      }
      if (curX < X_MID && curY < Y_MID) {
        quads[3]++
      }
    }


    for (let robot of robots) {
      const {curX, curY} = robot
      grid[curX][curY]++
    }

    console.log(Object.values(quads).reduce((prod, val) => {
      prod *= val
      return prod
    }, 1))
  } catch (err) {
    console.error(err)
  }
})();