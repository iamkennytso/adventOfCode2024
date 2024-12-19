const fs = require('fs').promises;

(async () => {
  try {
    const data = await fs.readFile('11a.txt', 'utf8')
    let ans = data.split(' ').map(num => Number(num))
    for (let i = 0; i < 25; i++) {
      const newAns = []
      for (let num of ans) {
        if (num === 0) {
          newAns.push(1)
        } else if (`${num}`.length % 2 === 0) {
          const mid = `${num}`.length / 2
          newAns.push(Number(`${num}`.substring(0, mid)), Number(`${num}`.substring(mid)))
        } else {
          newAns.push(num * 2024)
        }
      }
      ans = newAns
    }
    console.log(ans.length)
  } catch (err) {
    console.error(err)
  }
})();