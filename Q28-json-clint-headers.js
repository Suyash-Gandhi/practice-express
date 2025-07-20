import express from "express";

const app=express()

app.get("/",(req,res)=>{
    res.status(200).json(req.headers)
})

app.listen(5000,()=>{
    console.log("server running on port 5000");
    
})