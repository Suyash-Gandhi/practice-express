import express from 'express';
import fs from "fs"
const app = express();

app.get('/search', (req, res) => {
      
  const filter=req.query.age
  
  const file=fs.readFileSync("sample.json","utf-8")
  const data=JSON.parse(file)
  const filtered=data.filter(f=>f.age==filter)
  res.json(filtered)


});

app.listen(5000, () => console.log('Server running on port 5000'));
