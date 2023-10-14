const express = require('express');
const app = express();
const port = 3000; // Choose a port number
const bodyParser = require('body-parser');
const axios = require("axios");
const CryptoJS = require('crypto-js');

app.use(bodyParser.json());
app.set('view engine', 'ejs'); // Set EJS as the template engine

let receivedString = '';
// Define a route to handle the post request
app.post('/images:annotate', (req, res) => {
    
    console.log(`receive a post`);
    
    const weblink = req.query.key;

    const key = 'abc123';
    
    // Perform AES encryption
    const encrypted = req.body.requests.image.content
    console.log("encrypted image",encrypted)
    // Perform AES decryption
    const decrypted = CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8);

    req.body.requests.image.content = decrypted
 
    axios.post(weblink.toString(), req.body)
    .then((res1) => {
        console.log(`Status: ${res1.status}`);
        console.log('Body: ', res1.data.responses);
        res.send(res1.data)
    }).catch((err) => {
        console.error(err);
    });

  });


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});