const fs = require('fs').promises;

(async () => {
  try {
    const data = await fs.readFile('03a.txt', 'utf8');
    const matches = data.match(/mul\(\d+\,\d+\)/gm)
    let ans = 0
    for (let match of matches) {
      const [pre, post] = match.split(',')
      const [_, firstNum] = pre.split('(')
      const [secondNum, __] = post.split(')')
      ans += Number(firstNum) * Number(secondNum)
    }
    console.log(ans)
  } catch (err) {
    console.error(err)
  }
})();