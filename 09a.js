const fs = require('fs').promises;

(async () => {
  try {
    const data = await fs.readFile('09a.txt', 'utf8')
    const arr = data.split('').map(num => Number(num))
    let strArr = []
    let cur = 0
    let isBlank = false
    for (let num of arr) {
      if (isBlank) {
        for (let i = 0; i < num; i++) {
          strArr.push('.')
        }
        isBlank = false
      } else {
        for (let i = 0; i < num; i++) {
          strArr.push(Number(cur))
        }
        cur++
        isBlank = true
      }
    }

    let left = 0
    let right = strArr.length - 1
    while (left < right) {
      if (strArr[left] !== '.') {
        left++
      } else if (strArr[right] === '.') {
        right--
      } else {
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
      }
    }

    const noBlanks = strArr.filter(val => val !== '.')
    let ans = 0
    for (let i = 0; i < noBlanks.length; i++) {
      ans += (i * Number(noBlanks[i]))
    }

    console.log(ans)
  } catch (err) {
    console.error(err)
  }
})();