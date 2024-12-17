const fs = require('fs').promises;

(async () => {
  try {
    const data = await fs.readFile('01b.txt', 'utf8');
    const lines = data.replaceAll('\r','').split('\n')
    const arr1 = []
    const arr2 = []
    lines.forEach(line => {
      const [a, b] = line.split('   ')
      arr1.push(a)
      arr2.push(b)
    })
    const obj = {}
    for (let num of arr2) {
      obj[num] = (obj[num] || 0) + 1
    }
    let sum = 0
    for (let num of arr1) {
      sum += (Number(num) * (obj[num] || 0))
    }
    console.log(sum)
  } catch (err) {
    console.error(err)
  }
})();