import e from "express";

const app = e()

app.use(e.json())

let users = []

app.get("/", (req, res) => {
    res.send(users)

})


app.post("/newuser", (req, res) => {
    try {
        const user = req.body
        const identy = Math.floor(Math.random() * 100000) + 1
        const message = "new user generated. user id: " + identy
        const newuser = {
            person: user,
            id: identy
        }

        users.push(newuser)
        res.send(message)

    } catch (error) {
        console.log(error);

    }

})

app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const updatedbody = req.body

    const user = {
        person: updatedbody,
        id: id
    }
    const index = users.findIndex(u => u.id === id)



    if (index !== -1) {
        users[index] = user;
    }

    res.json(user)
})

app.listen(5000, () => {
    console.log("server running on port 5000");
})