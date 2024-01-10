const fs = require('fs');
const express = require('express');
const app = express();

const port = 8080;

app.get('/', (req, res) => {
  fs.readFile('src/index.html', 'utf8', (err, data) => {
    res.status(200).send(data);
  });
});

app.get('/about', (req, res) => {
  fs.readFile('src/about.html', 'utf8', (err, data) => {
    res.status(200).send(data);
  });
});

app.get('/about-me', (req, res) => {
  fs.readFile('src/about.html', 'utf8', (err, data) => {
    res.status(200).send(data);
  });
});

app.get('/about-us', (req, res) => {
  fs.readFile('src/about.html', 'utf8', (err, data) => {
    res.status(200).send(data);
  });
});

app.get('/contact', (req, res) => {
  fs.readFile('src/contact.html', 'utf8', (err, data) => {
    res.status(200).send(data);
  });
});

app.get('*', (req, res) => {
  fs.readFile('src/404.html', 'utf8', (err, data) => {
    res.status(404).send(data);
  });
});

app.listen(port, () => {
  console.log('listen on port: ' + port);
});
