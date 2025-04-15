import {appendFile, readFile} from 'fs/promises'

async function combineTwoFilesInThird(path1,path2){
    try {
        const writitingData1=await readFile(path1,'utf-8',(err,data)=>{
            console.log(data);
        })
        const writitingData2=await readFile(path2,'utf-8',(err,data)=>{
            console.log(data);
        })
        await appendFile("CombinedFile.txt",writitingData1+writitingData2)
    } catch (error) {
        console.log(error);
    }
}

combineTwoFilesInThird("./test.txt","./test2.txt")