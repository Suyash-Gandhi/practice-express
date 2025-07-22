import express from "express";

const app = express()



app.get("/", (req, res) => {
    const start = Date.now()

    setTimeout(() => {
        const duration = Date.now() - start
        res.json({ message: `time taken ${duration}ms` })
    }, 2000)
})

app.listen(5000, () => {
    console.log("server running on port 5000");

})