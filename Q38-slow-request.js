import express from "express";

const app = express()

app.use((req, res, next) => {
    const start = Date.now()

    const slowtimer=setTimeout(()=>{
        console.log(`please wait processing request route ${req.path}`);
        
    },500)

    res.on("finish", () => {
        const duration = Date.now() - start

            console.log(`time taken to process request from route ${req.path} : ${duration}ms`);
        clearTimeout(slowtimer)
    })
    next()
})



app.get("/", (req, res) => {

    setTimeout(() => {
        res.send("hello");

    }, 2000)
})

app.get("/server", (req, res) => {

        res.send("hello");
    
})

app.listen(5000, () => {
    console.log("server running on port 5000");

})