// const fs = require('fs').promises;

// const isValid = (input, graph) => {
//   for (let i = 0; i < input.length - 1; i++) {
//     const src = input[i]
//     const dst = input[i+1]
//     if (!findNode(src, dst, graph)) {
//       return false
//     }
//   }
//   return true
// }
// const findNode = (src, dst, graph) => {
//   const queue = [src]
//   const seen = new Set()
//   while (queue.length) {
//     const node = queue.shift()
//     if (node === dst) return true
//     seen.add(node)
//     for (let neighbor of (graph[node] || [])) {
//       if (!seen.has(neighbor)) {
//         queue.push(neighbor)
//       }
//     }
//   }

//   return false
// };


// (async () => {
//   try {
//     const data = await fs.readFile('05a.txt', 'utf8');
//     const [rulesLines, pageLines] = data.split('\r\n\r\n')
//     const graph = {}
//     let ans = 0

//     for (let rule of rulesLines.replaceAll('\r', '').split('\n')) {
//       const [a, b] = rule.split('|')
//       graph[a] ? graph[a].push(b) : graph[a] = [b]
//     }
    
//     for (let page of pageLines.replaceAll('\r', '').split('\n')) {
//       const instructions = page.split(',')
//       if (isValid(instructions, graph)) {
//         const midPoint = Math.floor(instructions.length / 2)
//         ans += Number(instructions[midPoint])
//       }
//     }

//     console.log(ans)

//   } catch (err) {
//     console.error(err)
//   }
// })();