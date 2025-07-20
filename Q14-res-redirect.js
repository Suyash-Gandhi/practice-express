import e from "express";

const app=e()

app.get("/",(req,res)=>{
    res.send("home page")
})

app.get("/redirect",(req,res)=>{
    res.redirect("/")
})

app.listen(5000, () => {
    console.log("server running on port 5000");
})