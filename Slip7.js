import {appendFile, readFile} from 'fs/promises'
import  {createServer} from 'http';
import querystring from 'querystring'

try{
    createServer((req,res)=>{
        if(req.method=='POST' && req.url=='/append-files' ){

            let body=''
            req.on('data',chunk=>{
                body+=chunk.toString()
            })
            req.on('end',()=>{
                const {filename1,filename2}=querystring.parse(body)
                console.log(body);
                const file1=filename1+".txt"
                const file2=filename2+".txt"
                insertFile(file1,file2)
            })            
        }
        res.writeHead(200,{
            'Content-type':'text/html'
        })
        res.end(`first file appended into second`)
    }).listen(3000)
    console.log(`server listening at ${3000}`);
    
}catch(error){
    console.log(error)
}

async function insertFile(path,data){
    try {
        const writitingData=await readFile(data,'utf-8',(err,data)=>{
            console.log(data);
        })
        await appendFile(path,writitingData)
    } catch (error) {
        console.log(error);
    }
}

// insertFile("./test.txt","./test2.txt")