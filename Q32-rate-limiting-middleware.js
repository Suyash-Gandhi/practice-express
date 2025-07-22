import express from "express";
import limit from "express-rate-limit"

const app=express()

const limiter=limit({
    windowMs:60*1000,
    max:10,
    message:"you can only send 10 requests per min"
})

app.use(limiter)

app.get("/",(req,res)=>{
    res.send("rate limiting api")
})

app.listen(5000,()=>{
    console.log("server running on port 5000");
    
})