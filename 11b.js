// const fs = require('fs').promises;

// (async () => {
//   try {
//     const data = await fs.readFile('11a.txt', 'utf8')
//     let ans = data.split(' ').map(num => Number(num))
//     const ansArr = {}
//     for (let h = 0; h < ans.length; h++) {
//       ansArr[h] = [ans[h]]
//       for (let i = 0; i < 75; i++) {
//         const newAns = [...ansArr[h]]
//         for (let num of newAns) {
//           if (num === 0) {
//             newAns.push(1)
//           } else if (`${num}`.length % 2 === 0) {
//             const mid = `${num}`.length / 2
//             newAns.push(Number(`${num}`.substring(0, mid)), Number(`${num}`.substring(mid)))
//           } else {
//             newAns.push(num * 2024)
//           }
//         }
//         ansArr[h] = newAns
//       }
//     }
//     console.log(Object.values(ansArr.reduce((sum, arr) => {
//       sum += arr.length
//       return sum
//     }, 0)))
//   } catch (err) {
//     console.error(err)
//   }const fs = require('fs').promises;

// const deltas = [
//   [1,0],
//   [-1,0],
//   [0,1],
//   [0,-1]
// ]

// const inRange = (x, y, grid) => {
//   return grid[x] && grid[x][y] !== undefined
// }

// const traverse = (x, y, cur, grid, seen) => {
//   if (cur === 9 && !seen.has(`${x},${y}`))  {
//     seen.add(`${x},${y}`)
//     return 1
//   }
//   const next = cur + 1
//   let valids = 0
//   deltas.forEach(([dx,dy]) => {
//     const newX = x + dx
//     const newY = y + dy
//     if (inRange(newX, newY, grid) && grid[newX][newY] === next) {
//       valids += traverse(newX, newY, next, grid, seen)
//     }
//   })
//   return valids
// }

// (async () => {
//   try {
//     const data = await fs.readFile('10a.txt', 'utf8')
//     const grid = data.replaceAll('\r', '').split('\n')
//       .map(line => line.split(''))
//       .map(numLine => numLine.map(num => Number(num)))

//     let ans = 0
//     const trailheads = []
//     for (let i = 0; i < grid.length; i++) {
//       for (let j = 0; j < grid[0].length; j++) {
//         if (grid[i][j] === 0) {
//           trailheads.push([i,j])
//         }
//       }
//     }

//     for (let trailhead of trailheads) {
//       const [x, y] = trailhead
//       const sum = traverse(x, y, 0, grid, new Set())
//       ans += sum
//     }

//     console.log(ans)
//   } catch (err) {
//     console.error(err)
//   }
// })();
// })();