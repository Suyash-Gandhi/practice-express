import express from 'express';

const app = express();
app.use(express.json())
app.post('/search', (req, res) => {
     const data= req.body
     res.setHeader("Content-Type","application/json")
res.send(JSON.stringify(data))

});

app.listen(5000, () => console.log('Server running on port 5000'));
