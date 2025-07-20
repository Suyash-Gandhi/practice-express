import express from "express"
import fs from "fs"
const app = express()

app.get("/search/:id",(req,res)=>{

    const userid=req.params.id
const read=fs.readFileSync("sample.json","utf-8")
const data =JSON.parse(read)

const id=data.filter(d=>d.id==userid)
res.json(id)
})

app.listen(5000,()=>{
    console.log('Server running on port 5000')
})