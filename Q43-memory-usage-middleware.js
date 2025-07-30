import express from "express";

const app = express()

let count = 0

const logmemory = (req, res, next) => {
    count++

    if (count % 10 === 0) {
        const memory = process.memoryUsage()
        console.log(`           RSS: ${(memory.rss / 1024 / 1024).toFixed(2)} mb`);
        console.log(`           heap used: ${(memory.heapUsed / 1024 / 1024).toFixed(2)} mb`);
        console.log(`           heap total: ${(memory.heapTotal / 1024 / 1024).toFixed(2)} mb`);
        console.log(`           external: ${(memory.external / 1024 / 1024).toFixed(2)} mb`);


    }
    next()
}

app.use(logmemory)

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(5000,()=>{
    console.log("server running on port 5000");
    
})