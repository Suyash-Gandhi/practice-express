
import express from "express";
import multer from "multer";
import path from "path"

const app = express()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        const name = Date.now() +"-"+ Math.round(Math.random() * 10000)
        cb(null, name + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

app.post("/", upload.array("files", 3), (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400), json({ error: "no file uploaded" })
    }

    const fileinfo = req.files.map(file => ({
        originalname: file.originalname,
        newname: file.filename,
        size: file.size
    }))
   res.json({
    message:"file uploded",
    files:fileinfo
})
})

app.listen(5000,()=>{
    console.log("server running on port 5000");
    
})

