const fs = require('fs').promises;

const isValidLine = line => {
  let prev = Number(line[0])
  const isInc = prev < Number(line[1])

  for (let i = 1; i < line.length; i++) {
    const num = line[i]
    if (
      num === prev ||
      isInc && (num < prev) ||
      !isInc && (prev < num) ||
      Math.abs(prev - num) > 3
    ) {
      return false
    }
      prev = num
  }
  return true
}

(async () => {
  try {
    const data = await fs.readFile('02a.txt', 'utf8');
    const lines = data.replaceAll('\r','').split('\n')
    let safes = 0
    lines.forEach(line => {
      const lineArr = line.split(' ').map(num => Number(num))
      if (isValidLine(lineArr)) safes++
    })
    console.log(safes)
  } catch (err) {
    console.error(err)
  }
})();