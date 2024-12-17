const fs = require('fs').promises;

(async () => {
  try {
    const data = await fs.readFile('02a.txt', 'utf8');
    const lines = data.replaceAll('\r','').split('\n')
    let safes = 0
    lines.forEach(line => {
      const lineArr = line.split(' ')
      let prev = Number(lineArr[0])
      let flag = true
      const isInc = prev < Number(lineArr[1])
      for (let i = 1; i < lineArr.length; i++) {
        const num = Number(lineArr[i])
        if (num === prev) {
          flag = false
          break
        }
        if (isInc && (num < prev || num - prev > 3) ) {
          flag = false
          break
        } else if (!isInc && (num > prev || prev - num > 3)) {
          flag = false
          break
        }
        prev = num
      }
      if (flag) safes++
    })
    console.log(safes)
  } catch (err) {
    console.error(err)
  }
})();