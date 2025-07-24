import express from "express";
import cors from "cors"

const app=express()

const allowed=["http://localhost:5000"]

const corsoption={
    origin:(origin,callback)=>{
        if(!origin|| allowed.includes(origin)){
            callback(null,true)
        }else{
            callback(new Error("not allowed by cors"))
        }
    }
}

app.use(cors(corsoption))

app.get("/",(req,res)=>{
    res.json({message:"successful"})
})

app.listen(5000,()=>{
    console.log("server running on port 5000");
    
})