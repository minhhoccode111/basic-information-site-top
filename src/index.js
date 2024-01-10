const fs = require('fs');
const express = require('express');
const app = express();

const port = 8080;

const sendFile = (filepath, res, status = 200) =>
  fs.readFile(filepath, 'utf8', (err, data) => {
    // handle server error
    if (err) res.status(500).send('Server broken');
    // server files
    else res.status(status).send(data);
  });

// handle index
app.get('/', (req, res) => sendFile('src/index.html', res));

// handle about
app.get('/about', (req, res) => sendFile('src/about.html', res));

app.get('/about-me', (req, res) => sendFile('src/about.html', res));

app.get('/about-us', (req, res) => sendFile('src/about.html', res));

// handle contact
app.get('/contact', (req, res) => sendFile('src/contact.html', res));

// handle 404
app.get('*', (req, res) => sendFile('src/404.html', res, 404));

app.listen(port, () => {
  console.log('listen on port: ' + port);
});
