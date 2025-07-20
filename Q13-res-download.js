import express from "express"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const _filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(_filename)

const app = express()

app.get('/generatefile', (req, res) => {
    const filename = "sample.txt"
    const filepath = path.join(__dirname, filename)
    const context = "this file was created on :" + new Date().toLocaleString()

    fs.writeFile(filepath, context, (err) => {
        if (err) {
            console.log(err);

        }
        res.download(filepath, filename, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("file downloaded");
                
            }

            fs.unlink(filepath, (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("file deleted");

                }
            })
        })
    })
})

app.listen(5000, () => {
    console.log("server running on port 5000");
})