
import http from"http";
import * as A from "./Second.js"


console.log(A.lastname,A.default,A.name);

const server=http.createServer((req,res)=>{
    console.log("i am now creating server");
})


server.listen(8000,()=>{
    console.log("inside server is listening");
})