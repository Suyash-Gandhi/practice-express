import e from "express";

const app = e()


const apikeymiddleware=(req,res,next)=>{
const key=req.headers["myapikey"]

const correctkey="YOUR_API_KEY"

if (key!==correctkey) {
    return res.status(403).json({ error: 'Forbidden: Invalid API Key' })
}

next()
}

app.get("/",apikeymiddleware,(req,res)=>{
res.send("hello")
})

app.listen(5000, () => {
    console.log("server running on port 5000");
})