import express from "express";

const app=express()

const blockedip=["::1","127.0.0.1"]

const blocked=(req,res,next)=>{
    const ip=req.ip
if (blockedip.includes(ip)) {
    return res.status(403).send("access denied")
}
next()
}

app.use(blocked)

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(5000,()=>{
    console.log("server running on post 5000");
    
})


