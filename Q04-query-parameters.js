import express from 'express';

const app = express();

app.get('/search', (req, res) => {
      
const query=req.query.q

res.send(`you searched for ${query}`);



});

app.listen(5000, () => console.log('Server running on port 5000'));
