const fs = require('fs').promises;

(async () => {
  try {
    const data = await fs.readFile('01a.txt', 'utf8');
    const lines = data.replaceAll('\r','').split('\n')
    const arr1 = []
    const arr2 = []
    lines.forEach(line => {
      const [a, b] = line.split('   ')
      arr1.push(a)
      arr2.push(b)
    })
    // optimize so that numbers are added in order via binary search?
    arr1.sort()
    arr2.sort()
    console.log(arr1.reduce((sum, num, idx) => {
      sum += Math.abs(Number(num) - Number(arr2[idx]))
      return sum
    }, 0))
  } catch (err) {
    console.error(err)
  }
})();