import express from "express";

const app = express()

app.use((req, res, next) => {
    const start = Date.now()

    res.on("finish", () => {
        const duration = Date.now() - start
         console.log(`time taken to process request : ${duration}ms`);
    })
    next()
})



app.get("/", (req, res) => {

    setTimeout(() => {
        res.send("hello");

    }, 2000)
})

app.listen(5000, () => {
    console.log("server running on port 5000");

})