const fs = require('fs').promises;

(async () => {
  try {
    const data = await fs.readFile('08a.txt', 'utf8');
    const grid = data.replaceAll('\r', '').split('\n').map(line => line.split(''))
    const obj = {}
    const uniqs = new Set()

    const isInBound = (x, y) => {
      return grid[x] && grid[x][y] !== undefined
    }

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        const char = grid[i][j]
        if (char !== '.') {
          obj[char] ? obj[char].push([i,j]) : obj[char] = [[i,j]]
        }
      }
    }

    for (let coordSet of Object.values(obj)) {
      for (let i = 0; i < coordSet.length; i++) {
        for (let j = i + 1; j < coordSet.length; j++) {
          const pointA = coordSet[i]
          const pointB = coordSet[j]
          const deltaX = Math.abs(pointA[0] - pointB[0])
          const deltaY = Math.abs(pointA[1] - pointB[1])

          const newPointAx = pointA[0] < pointB[0] ? pointA[0] - deltaX : pointA[0] + deltaX
          const newPointAy = pointA[1] < pointB[1] ? pointA[1] - deltaY : pointA[1] + deltaY
          const newPointBx = pointB[0] <= pointA[0] ? pointB[0] - deltaX : pointB[0] + deltaX
          const newPointBy = pointB[1] <= pointA[1] ? pointB[1] - deltaY : pointB[1] + deltaY
          const newPointA = [newPointAx, newPointAy]
          const newPointB = [newPointBx, newPointBy]

          if (isInBound(newPointA[0], newPointA[1])) {
            uniqs.add(`${newPointA[0]},${newPointA[1]}`)
          }
          if (isInBound(newPointB[0], newPointB[1])) {
            uniqs.add(`${newPointB[0]},${newPointB[1]}`)
          }
        }
      }
    }
    // const mapMe = grid.map(_ => _)
    // uniqs.forEach(uni => {
    //   const [x,y] = uni.split(',')
    //   mapMe[x][y] = '#'
    // })
    // for (let i = 0; i < grid.length; i++) {
    //   console.log(mapMe[i].join(''))
    // }
    console.log(uniqs.size)
  } catch (err) {
    console.error(err)
  }
})();