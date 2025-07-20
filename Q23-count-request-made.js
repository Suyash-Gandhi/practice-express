import express from "express";

const app=express()

const count={}

const countrequest=(req,res,next)=>{
    const path=req.path
if (!count[path]) {
    count[path]=1
} else {
    count[path]++
}
console.log(`${path} has been called ${count[path]} times`);

next()
}

app.use(countrequest)

app.get("/",(req,res)=>{
    res.send("home page")
})

app.get("/about",(req,res)=>{
    res.send("about page")
})

app.get("/contact",(req,res)=>{
    res.send("contact page")
})


app.listen(5000,()=>{
    console.log("server running");
    
})