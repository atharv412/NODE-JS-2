import { readFile } from "fs";


readFile("./test.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error);
    }else if(data) console.log(""+data);
})