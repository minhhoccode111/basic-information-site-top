const http = require('node:http');
const fs = require('node:fs');

http
  .createServer((req, res) => {
    let filepath = '';
    if (req.url === '/') filepath = 'src/index.html';
    else if (req.url === '/about') filepath = 'src/about.html';
    else if (req.url === '/contact') filepath = 'src/contact.html';
    else {
      filepath = 'src/404.html';
      fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) return console.log(err);
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    }

    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) return console.log(err);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080, () => console.log(`Listen on port: 8080`));
