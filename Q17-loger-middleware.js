import e from "express";

const app = e()



app.use((req,res,next)=>{
    const ip=req.ip
    const now=new Date()

    const time=now.toLocaleTimeString()
const string="you loged in with ip address: "+ip+" at "+time
    res.send(string)
    next()
})

app.get("/",(req,res)=>{
})

app.listen(5000, () => {
    console.log("server running on port 5000");
})