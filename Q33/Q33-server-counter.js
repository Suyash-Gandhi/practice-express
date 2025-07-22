import express from "express";
import fs from "fs"

const app=express()

let counter=0

if (fs.existsSync("counter.json")) {
    const data=fs.readFileSync("counter.json","utf-8")
    try{
        counter=JSON.parse(data).value
    }catch{
        counter=0
    }
}
else{
    fs.writeFileSync("counter.json",JSON.stringify({value:0}))
}

app.get("/",(req,res)=>{
    counter++
   fs.writeFileSync("counter.json",JSON.stringify({value:counter}))
   res.send(`counter : ${counter}`)
})

app.listen(5000,()=>{
    console.log("server running on port 5000");
    
})