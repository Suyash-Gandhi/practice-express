import express from "express"

const app=express()


function logmmiddleware(req,res,next){
  console.log(`${req.method} ${req.url}`)
    next()
}

app.use(logmmiddleware)

app.get("/search",(req,res)=>{
 res.send('Hello world!')
})


app.post("/search",(req,res)=>{
 res.send('Hello world!')
})

app.listen(5000, () => console.log('Server running on port 5000'));