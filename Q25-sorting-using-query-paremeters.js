import express from "express";
import fs from "fs"
const app = express()

app.get("/", (req, res) => {
    const file = fs.readFileSync("sample.json", "utf-8")
    const data = JSON.parse(file)

    const sort = req.query.sort
    let sorted
    if (sort === "asc") {
        sorted = data.sort((a, b) => a.name.localeCompare(b.name))
    } else {
        sorted = data.sort((a, b) => b.name.localeCompare(a.name))
    }

    res.json(sorted)
})


app.listen(5000, () => {
    console.log("server running on port 5000");

})