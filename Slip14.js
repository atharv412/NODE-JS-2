import {validateEmpDetails} from './index.js'
import readline from 'node:readline';

let rl = readline.createInterface(
    process.stdin,
    process.stdout
);
rl.setPrompt(`Enter first Date of Birt,Joining Date Salary `);
rl.prompt()
rl.on('line', (input) => {
  const temp=input.split(" ")
const values=temp[1].split('/')

  console.log(validateEmpDetails(values));
  rl.close();
});