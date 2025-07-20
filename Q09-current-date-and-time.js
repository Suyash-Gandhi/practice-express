import express from "express"


const app=express()

app.get("/search",(req,res)=>{
    const dateandtime= new Date().toISOString()
    console.log(dateandtime);
    
const[date,timems]=dateandtime.split("T")
console.log(date,timems);

 const time=timems.split(".")[0]
 console.log(time);
 
    res.send(`date:${date} 
        time:${time}`)
})

app.listen(5000, () => console.log("server running on port 5000"));
