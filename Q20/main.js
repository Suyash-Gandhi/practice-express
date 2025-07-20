import e from "express";
import router from "./Q20-express-router.js"
const app=e()

app.use("/",router)

app.listen(5000,()=>console.log("server running on port 5000"))