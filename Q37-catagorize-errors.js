import express from "express";

const app=express()
app.use(express.json())


class apperror extends Error{
    constructor(message,statuscode,origin="application"){
        super(message)
        this.statuscode=statuscode
        this.origin=origin
        this.isOperational=true
        this.errortype=statuscode>=400&&statuscode<500?"client error":"server error"
        Error.captureStackTrace(this,this.constructor)
    }
}

app.get("/client",(req,res,next)=>{
const err=new apperror("invalid request",400,"client")
next(err)
})

app.get("/server",(req,res,next)=>{
    try{
        const a = b+1
    }catch(err){
err.statuscode=500
err.origin="server"
next(err)
    }
})

app.get("/db",(req,res,next)=>{
    const err=apperror("connection faled",503,"database")
    next(err)
})

app.get("/extra",(req,res,next)=>{
    const err=("connection faled",503,"database")
    next(err)
})

app.use((err,req,res,next)=>{
    const statuscode=err.statuscode||500
    const origin=err.origin||"unknown"
    const errortype=err.errortype

    res.status(statuscode).json({
        statuscode:statuscode,
        type:errortype,
        origin,
        message:err.message||"something went wrong"
    })
})

app.listen(5000,(req,res)=>{
    console.log("server running on port 5000");
    
})