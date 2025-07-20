import express from "express";

const app=express()

app.use((req,res)=>{
    res.status(404).send("page not found")
})

/*

json response

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Oops! The page you're looking for does not exist.",
    path: req.originalUrl
  });
});

html response

app.use((req, res) => {
  res.status(404).send(`
    <h1>404 Not Found</h1>
    <p>Sorry, the page <strong>${req.originalUrl}</strong> was not found on this server.</p>
  `);
});

*/
app.listen(5000,()=>console.log("server running on port 5000"))