const express = require('express');
const app = express();
const port = 3000; // Choose a port number
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/', (req, res) => {
    
    console.log(`receive a get`);
    console.log(req.query.key);
    
  });


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});