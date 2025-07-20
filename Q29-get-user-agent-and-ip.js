import express from "express";

const app=express()

app.get("/",(req,res)=>{
    const useragent=req.get("User-Agent")
    const ip=req.ip
    const data={
        useragent,
        ip
    }
    res.status(200).send(data)
})

app.listen(5000,()=>{
    console.log("server running on port 5000");
    
})