import express from "express";
import fs from "fs"
const app = express()

app.get("/", (req, res) => {

    const file = fs.readFileSync("sample.json", "utf-8")
    const data = JSON.parse(file)

    const query = parseInt(req.query.id)
    const user = data.find((d) => d.id === query)
    if (!query || isNaN(query)) {
        res.status(400).json({message:"status 4040 bad request.invalid or missing id"})
    }
  else if (query === 100) {
        try {
            throw new Error("test error")
        } catch (err) {
            res.status(500).json({message:"status 500 .internal server error ."+ err.message})
        }
    }
    else if (!user) {
        res.status(404).json({message:"status 404. user not found"})
    }
   else {
        res.status(200).json({message:"status 200",user})
    }



})

app.listen(5000, () => {
    console.log("server running on port 5000");

})