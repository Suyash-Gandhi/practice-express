import express from "express"

const app = express()

app.use(express.json())
function middleware(req,res,next) {
    const body =req.body
    console.log(body);
    if(body.name) {
        console.log("true");
    }
    else{
        res.status(400).send("Bad Request");

    }
    next()
}

app.use(middleware)


app.post("/search",(req,res)=>{
res.send("Request processed successfully")
})

app.listen(5000,()=>console.log("server running on port 5000")
)