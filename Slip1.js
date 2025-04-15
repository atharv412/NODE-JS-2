import { createServer } from "http";

// try {
//     createServer((req, res) => {
//         res.setHeader('Content-Type', 'text/html');
//         const text1 = 'hello world'
//         const final = text1.toLowerCase()
//         res.end(`previous text:${text1} \n formatted text:${final}`)
//     }).listen(8000)
//     console.log("server listening on port 8000");
// } catch (error) {
// console.log(error);
// }

const server=createServer(function(req,res){
    res.setHeader("Content-Type",'text/html')
    const text1='hello world'
    res.write("Previous text is "+text1,function (err) {
        if (err) throw err
    })
    res.write("formatted text is"+text1.toUpperCase(),function (err) {
        if (err) throw err
    })
    res.end()
})
server.listen(7000,'localhost',function () {
    console.log("server running at port 7000");
    
})