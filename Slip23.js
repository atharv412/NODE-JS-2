import { readFile,writeFile } from "fs";


readFile("./test2.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error);
    }else if(data) {
        // let counter=data.split('\n')
        // console.log(`there are total ${counter.length} line in the file`);
        console.log(`the data in file is as follows\n ${data}`)
        const updated =data.replace(/another /g,"replaced")

        const res=writeFile("./test2.txt",updated,(error)=>{
            if(error){
                console.log(error);
                
            }
        })
        console.log(res);
        
    };
})