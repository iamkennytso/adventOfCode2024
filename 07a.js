// const fs = require('fs').promises;

// (async () => {
//   try {
//     const data = await fs.readFile('07a.txt', 'utf8');
//     const lines = data.replaceAll('\r', '').split('\n')
//     let ans = 0

//     const trial = (total, cur, numsArray) => {
//       if (cur === total) return true
//       if (cur > total || !numsArray.length) return false
//       const [nextNum, ...restArr] = numsArray
//       return trial(total, cur + nextNum, restArr) || trial(total, cur * nextNum, restArr)
//     }

//     lines.forEach(line => {
//       const [totalStr, numsStr] = line.split(':')
//       const total = Number(totalStr)
//       const nums = numsStr.trim().split(' ').map(num => Number(num))
//       if (trial(total, 0, nums)) ans += total
//     })

//     console.log(ans)
//   } catch (err) {
//     console.error(err)
//   }
// })();