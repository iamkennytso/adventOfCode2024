// works on sample, not on actual
// const fs = require('fs').promises;

// (async () => {
//   try {
//     const data = await fs.readFile('13a.txt', 'utf8')
//     const machinesData = data
//       .replaceAll('\r', '')
//       .split('\n\n')
//       .map(str => {
//         const [aLine, bLine, pLine] = str.split('\n')
//         const [aXLine, aYLine] = aLine.split(',')
//         const [, aXvalStr] = aXLine.split('X')
//         const aX = Number(aXvalStr)
//         const [, aYvalStr] = aYLine.split('Y')
//         const aY = Number(aYvalStr)

//         const [bXLine, bYLine] = bLine.split(',')
//         const [, bXvalStr] = bXLine.split('X')
//         const bX = Number(bXvalStr)
//         const [, bYvalStr] = bYLine.split('Y')
//         const bY = Number(bYvalStr)
        
//         const [pXLine, pYLine] = pLine.split(',')
//         const [, pXvalStr] = pXLine.split('X=')
//         const pX = Number(pXvalStr)
//         const [, pYvalStr] = pYLine.split('Y=')
//         const pY = Number(pYvalStr)
//         return { aX, aY, bX, bY, pX, pY }
//       })
    
//     const minCoins = (data, cost = 0, curX = 0, curY = 0, aLeft = 100, bLeft = 100, memo = {}) => {
//       const str = `${curX, curY}`
//       const { aX, aY, bX, bY, pX, pY } = data
//       if (aLeft < 0 || bLeft < 0) {
//         memo[str] = Infinity
//         return Infinity
//       }
//       if (curX === pX && curY === pY) {
//         memo[str] = cost
//         return cost
//       }
//       if (str in memo) return memo[str]
//       memo[str] = Math.min(
//         minCoins(data, cost + 3, curX + aX, curY + aY, aLeft - 1, bLeft, memo),
//         minCoins(data, cost + 1, curX + bX, curY + bY, aLeft, bLeft - 1, memo),
//       )
//       return memo[str]
//     }
//     let ans = 0

//     for (let machine of machinesData) {
//       const machineMin = minCoins(machine)
//       console.log(machineMin)
//       if (machineMin !== Infinity) ans += machineMin
//     }
//     console.log(ans)
//   } catch (err) {
//     console.error(err)
//   }
// })();