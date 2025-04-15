import { createServer } from "http";

try {
    createServer((req,res)=>{
        res.writeHead(200,
            {
                'Content-Type': 'text/html'
            }
        )
        const text1 = 'Garware College of Commerce,Pune '
        res.end(`Collerge Info:${text1}`)

    }).listen(8000)
    console.log("Serer Listening on port 8000");
} catch (error) {
    console.log(error);
}