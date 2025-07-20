import express from "express";
import fs from "fs"
const app=express()

app.get("/",(req,res)=>{
const file=fs.readFileSync("sample.json","utf-8")
const data=JSON.parse(file)

if(!Array.isArray(data)){
    return res.status(404).json({error:"items shoule be array"})
}

const frequency={}

data.forEach(item=>{
    const country=item.country
    frequency[country]=(frequency[country]||0)+1
})


const summary={
    totalitems:data.length,
    uniquecountries:Object.keys(frequency).length,
    frequency:frequency,
    sorteditems:data.sort((a, b) => a.name.localeCompare(b.name))
}

res.status(200).json(summary)
})

app.listen(5000,()=>{
    console.log("server running on port 5000");
    
})