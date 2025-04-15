
// const fs = require('fs');
import {readFileSync} from'fs'

const readme=readFileSync('./test1.txt',{encoding:'utf-8',flag:'r'})
if(!readme){
    throw new Error("Error 404 file not found")
}
console.log(readme);
