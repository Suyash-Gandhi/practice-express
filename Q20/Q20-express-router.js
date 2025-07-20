import e from "express";

const router=e.Router()

router.get("/",(req,res)=>{
    res.send("hello")
})

router.get("/:id",(req,res)=>{
    res.send(`${req.params.id}`)
})
export default router