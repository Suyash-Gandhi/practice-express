import express from "express"
import sanitizeHtml from 'sanitize-html';
import { body, validationResult } from 'express-validator';

const app = express()
app.use(express.json())


const sanitizeinput = [
    /*express-validator - to validate input fields.
   To ensure that user input meets the expected format 
   and rules before using it in your server logic or database.

*/
    body("username").trim().notEmpty().withMessage("username is required"),

/*
    sanitize-html - To prevent malicious code from being injected 
    into your website through inputs like:

    <script>alert('hacked')</script>

    <img src="x" onerror="stealCookies()"></img>

*/
    (req, res, next) => {
        for (let key in req.body) {
            if (typeof req.body[key] === "string") {
                req.body[key] = sanitizeHtml(req.body[key],{
                      allowedTags: [],
                    allowedAttributes: {}
                })

            }
        }

        next()
    }
]

app.post("/", sanitizeinput, (req, res) => {

const errors=validationResult(req)
if (!errors.isEmpty()) {
    return res.status(400).json({errors:errors.array()})
}


    const { username } = req.body
    res.send(`validated and sanitized username ${username}`)

})

app.listen(5000, () => {
    console.log("server running in port 5000");

})