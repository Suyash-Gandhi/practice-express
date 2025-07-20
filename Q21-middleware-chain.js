import express from "express";

const app = express()

const middleware1 = (req, res, next) => {
    console.log("middleware one " + Date.now());
    next()
}

const middleware2 = (req, res, next) => {
    console.log("middleware two " + Date.now());
    next()
}

const middleware3 = (req, res, next) => {
    console.log("middleware three " + Date.now());
    next()
}

app.get("/search", middleware1, middleware2, middleware3, (req, res) => {
    res.send("all middlewares passed")
})

app.listen(5000, () => {
    console.log("server running on port 5000");

})