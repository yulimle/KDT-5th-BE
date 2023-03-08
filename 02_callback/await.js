const fs = require('fs').promises;

async function main() {
  let data = await fs.readFile('test.txt', 'utf-8');
  console.log('1번', data.toString());
  data = await fs.readFile('test.txt', 'utf-8');
  console.log('2번', data.toString());
  data = await fs.readFile('test.txt', 'utf-8');
  console.log('3번', data.toString());
  data = await fs.readFile('test.txt', 'utf-8');
  console.log('4번', data.toString());
  data = await fs.readFile('test.txt', 'utf-8');
}
main();
