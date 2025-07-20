import express from 'express';
import fs from "fs"
const app = express();

app.get("/", (req, res) => {
    const file = fs.readFileSync("sample.json", "utf-8")
    const data = JSON.parse(file)

    const page = parseInt(req.query.page)
    const limit =parseInt(req.query.limit)

    const start=(page-1)*limit
    const end=start+limit

    const pagination=data.slice(start,end)

    res.send(pagination)

})


app.listen(5000, () => console.log('Server running on port 5000'));
