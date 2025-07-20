import e from "express";

const app = e();

app.use(e.urlencoded({ extended: true }));

app.post("/submit",(req,res)=>{


res.send(`Form received! Name: ${name}, Email: ${email}`);
const { name, email } = req.body;
})

app.listen(5000, () => {
    console.log("server running on port 5000");
});
