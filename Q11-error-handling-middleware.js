import express from "express";

const app =express()

app.get("/error",(req,res,next)=>{
    const err=new Error("this is a error page")
    next(err)
})


app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send("something went wrong")
    
})

app.listen(5000,()=>console.log("server running on port 5000")
)