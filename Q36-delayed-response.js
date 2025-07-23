import express from "express";

const app = express();


app.get("/", (req, res) => {

  setTimeout(() => {
    res.json({ message: "response after 2 seconds delay" });
  }, 2000);
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
