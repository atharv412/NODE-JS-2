import readline from 'node:readline';
import { nameCalcAge } from './index.js';

let rl = readline.createInterface(
    process.stdin,
    process.stdout
);
rl.setPrompt(`Enter first name,lastname and Date of Birth `);
rl.prompt()
rl.on('line', (input) => {
  const temp=input.split(" ")
  console.log(temp);
  const a=nameCalcAge(temp[0],temp[1],temp[2])
  console.log(`Fullname of the user is ${a[0]} and Age of the user is ${a[1]}`);
  rl.close();
});