import express from "express";

const app=express()
app.use(express.json())

const dummy="ab123.dummy.playload"

app.post("/",(req,res)=>{
    const {username,password}=req.body

    if (username&&password) {
        return res.json({
            message:"login successful",
            token:dummy
        })
    }
    res.status(400).json({message:"invalid creditials"})
})

const authenticate=(req,res,next)=>{
    const headers=req.headers["authorization"]

    if (!headers) {
        return res.status(401).json({message:"missing token"})
    }

    const token=headers.split(" ")[1]

    if (token!==dummy) {
         return res.status(403).json({ message: "Invalid token" })
    }

    next()
}

app.get("/dashbord",authenticate,(req,res)=>{
res.json({ message: "dashboard page" });
})

app.listen(5000,()=>{
    console.log("server running on port 5000");
    
})