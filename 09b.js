// works on example...
// const fs = require('fs').promises;

// (async () => {
//   try {
//     const data = await fs.readFile('09a.txt', 'utf8')
//     const arr = data.split('').map(num => Number(num))

//     const blanks = []
//     const nums = []
//     let strArr = []
//     let cur = 0
//     let isBlank = false
//     for (let num of arr) {
//       if (isBlank) {
//         blanks.push({start: strArr.length, size: Number(num)})
//         for (let i = 0; i < num; i++) {
//           strArr.push('.')
//         }
//         isBlank = false
//       } else {
//         for (let i = 0; i < num; i++) {
//           strArr.push(Number(cur))
//         }
//         nums.push({end: strArr.length, val: cur, quant: Number(num)})
//         cur++
//         isBlank = true
//       }
//     }

//     for (let i = nums.length - 1; i >= 0; i--) {
//       const numSet = nums[i]
//       for (let j = 0; j < blanks.length; j++) {
//         const blank = blanks[j]
//         if (blank.size >= numSet.quant) {
//           for (let k = 0; k < numSet.quant; k++) {
//             strArr[blank.start + k] = numSet.val
//             strArr[numSet.end - 1 - k] = '.'
//           }
//           blank.size -= numSet.quant
//           blank.start += numSet.quant
//           break
//         }
//       }
//     }

//     let ans = 0
//     for (let i = 0; i < strArr.length; i++) {
//       if (strArr[i] !== '.') {
//         ans += (i * Number(strArr[i]))
//       }
//     }

//     console.log(ans)
//   } catch (err) {
//     console.error(err)
//   }
// })();