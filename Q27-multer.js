import express from "express";
import multer from "multer";
import path from "path"
const app=express()


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"Q20/")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const uplode=multer({storage})

app.post("/upload",uplode.single("profilepic"),(req,res)=>{
console.log(req.file);
res.send("successful")
})


app.listen(5000,()=>{
    console.log("server running on port 5000");
    
})