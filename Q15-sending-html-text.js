import e from "express";

const app=e()

app.get("/",(req,res)=>{
    res.send("<h1>hello</h1>")
})

app.listen(5000, () => {
    console.log("server running on port 5000");
})