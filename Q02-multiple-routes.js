import express from "express"

const app =express()

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