import express from "express";
import path from "path";

const app = express();

const fullPath = path.resolve("Express-static-experement-folder");
console.log("Serving from:", fullPath);

app.use("/search", express.static(fullPath));

app.listen(5000, () => console.log("server running on port 5000"));
