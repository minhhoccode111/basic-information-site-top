const http = require('node:http');
const fs = require('node:fs');

http
  .createServer((req, res) => {
    let filepath = '';
    if (req.url === '/') filepath = 'src/index.html';
    else if (req.url === '/about') filepath = 'src/about.html';
    else if (req.url === '/contact') filepath = 'src/contact.html';
    else filepath = 'src/404.html';

    fs.readFile(filepath, 'utf8', (err, data) => {
      // server error can't read files
      if (err) {
        res.statusCode = 500;
        return res.end('Error landing page');
      }
      // not found 404
      if (filepath === 'src/404.html') res.writeHead(404, { 'Content-Type': 'text/html' });
      // other routes
      else res.writeHead(200, { 'Content-Type': 'text/html' });

      // response
      res.write(data);
      return res.end();
    });
  })
  .listen(8080, () => console.log(`Listen on port: 8080`));
