const fs = require('fs').promises;

(async () => {
  try {
    const data = await fs.readFile('03a.txt', 'utf8');
    const matches = data.match(/mul\(\d+\,\d+\)|do\(\)|don't\(\)/gm)
    let ans = 0
    let enabled = true
    for (let match of matches) {
      if (match === 'do()') {
        enabled = true
      } else if (match === "don't()") {
        enabled = false
      } else {
        if (!enabled) continue
        const [pre, post] = match.split(',')
        const [_, firstNum] = pre.split('(')
        const [secondNum, __] = post.split(')')
        ans += Number(firstNum) * Number(secondNum)
      }
    }
    console.log(ans)
  } catch (err) {
    console.error(err)
  }
})();